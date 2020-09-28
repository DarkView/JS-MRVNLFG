import { getMemberLevel } from "knub/dist/helpers";
import { EmbedOptions, User } from "eris";
import { eventsCommand } from "../types";
import { commandTypeHelpers as ct } from "../../../commandTypes";
import { sendErrorMessage, sendSuccessMessage } from "../../../pluginUtils";
import { resolveUser } from "../../../utils";
import { logger } from "../../../logger";

export const ReopenEventCmd = eventsCommand({
  trigger: "event reopen",
  permission: null,
  source: "guild",

  signature: {
    eventId: ct.number(),
  },

  async run({ message: msg, args, pluginData }) {
    const cfg = pluginData.config.get();
    const isMod = getMemberLevel(pluginData, msg.member) >= cfg.level_override;
    if (!msg.member.roles.includes(cfg.organiser_role) && !isMod) {
      return;
    }

    const evt = await pluginData.state.guildEvents.findByEventId(args.eventId, true);
    if (!evt || evt.open) {
      sendErrorMessage(msg.channel, "There is no active/closed event with that ID!");
      return;
    }

    if (evt.creator_id !== msg.author.id && !isMod) {
      sendErrorMessage(msg.channel, "You are not the creator of that event!");
      return;
    }

    pluginData.state.guildEvents.markEventClosed(evt.id);

    const author = (await resolveUser(pluginData.client, evt.creator_id)) as User;
    const embed: EmbedOptions = {
      fields: [],
    };
    embed.author = { name: author.username, icon_url: author.avatarURL };
    embed.title = evt.title;
    embed.description = evt.description;
    embed.footer = { text: "Click 👍 to request to join this event." };
    embed.color = 0x07aeeb;

    const evtMsg = await pluginData.client.getMessage(cfg.events_announce_channel, evt.announce_id);
    if (evtMsg) {
      await evtMsg.edit({ embed });
      await evtMsg.removeReactions();
      await evtMsg.addReaction("👍");
    }

    await pluginData.state.guildEvents.markEventOpen(evt.id);

    let modOverride = "";
    if (isMod) modOverride = "Moderator override:\n";
    sendSuccessMessage(msg.channel, modOverride + "Event registration reopened, announcement edited!");

    logger.info(`User ${msg.author.id} reopened registration for event ${evt.id} | Moderator: ${isMod}`);
  },
});
