import { StrategyAdapter } from '@loopback/authentication-passport'
import {
    Issuer,
    Strategy,
} from 'openid-client';
import {
    UAA_CLIENT_ID,
    UAA_CLIENT_SECRET,
    UAA_REDIRECT_URLS,
    UAA_SERVER_URL
} from './env';

const verify = async () => {

}

export const uaaAuthStrategy = async () => {
    const UAA_ISSUER = await Issuer.discover(UAA_SERVER_URL);
    const UAA_CLIENT = new UAA_ISSUER.Client({
        client_id: UAA_CLIENT_ID,
        client_secret: UAA_CLIENT_SECRET,
        redirect_uris: UAA_REDIRECT_URLS
    });
    return new StrategyAdapter(
        new Strategy({
            client: UAA_CLIENT
        }, verify), 'DD'
    )
}
