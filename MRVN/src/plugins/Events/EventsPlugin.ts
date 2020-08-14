import { PluginOptions, plugin } from "knub";
import { GuildEvents } from "../../data/GuildEvents";
import { GuildEventParticipants } from "../../data/GuildEventParticipants";
import { EventsPluginType } from "./types";
import { CreateEventCmd } from "./commands/CreateEventsCmd";
import { EventReactionAddEvt } from "./events/EventReactionAddEvt";
import { ListEventCmd } from "./commands/ListEventsCmd";
import { CloseEventCmd } from "./commands/CloseEventCmd";
import { DeleteEventCmd } from "./commands/DeleteEventCmd";

const defaultOptions: PluginOptions<EventsPluginType> = {
  config: {
    organizer_role: "741758286331904031",
    level_override: 50,
    organizer_channel: "741758391655071755",
    events_max: 2,
    events_announce_channel: "741758530754707597",
    voice_parent_id: "741775198466080899",
  },
};

export const EventsPlugin = plugin<EventsPluginType>()("events", {
  defaultOptions,

  // prettier-ignore
  commands: [
    CreateEventCmd,
    ListEventCmd,
    CloseEventCmd,
    DeleteEventCmd,
  ],

  // prettier-ignore
  events: [
    EventReactionAddEvt,
  ],

  async onLoad(pluginData) {
    const { state, guild } = pluginData;

    state.guildEvents = GuildEvents.getGuildInstance(guild.id);
    state.guildEventParticipants = GuildEventParticipants.getGuildInstance(guild.id);
  },
});