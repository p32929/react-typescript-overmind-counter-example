import {createHook} from 'overmind-react';
import {IConfig} from 'overmind';
import * as actions from './OvermindActions'
import {state} from "./OvermindState";

export const config = {
    state,
    actions,
};

export const useOvermind = createHook<typeof config>();

declare module 'overmind' {
    interface Config extends IConfig<typeof config> {
        //
    }
}
