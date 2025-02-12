// Generated by Wrangler
// After adding bindings to `wrangler.toml`, regenerate this interface via `npm run cf-typegen`
interface Env {
	BROWSER: DurableObjectNamespace;
	MYBROWSER: BrowserWorker;
	MD_CACHE: KVNamespace;
	RATELIMITER: any;
	AI: Ai
}

interface TweetBase {
    /**
     * Language code of the tweet. E.g "en", "es".
     */
    lang: string;
    /**
     * Creation date of the tweet in the format ISO 8601.
     */
    created_at: string;
    /**
     * Text range of the tweet text.
     */
    display_text_range: Indices;
    /**
     * All the entities that are part of the tweet. Like hashtags, mentions, urls, etc.
     */
    entities: TweetEntities;
    /**
     * The unique identifier of the tweet.
     */
    id_str: string;
    /**
     * The tweet text, including the raw text from the entities.
     */
    text: string;
    /**
     * Information about the user who posted the tweet.
     */
    user: TweetUser;
    /**
     * Edit information about the tweet.
     */
    edit_control: TweetEditControl;
    isEdited: boolean;
    isStaleEdit: boolean;
}
/**
 * A tweet as returned by the the Twitter syndication API.
 */
interface Tweet extends TweetBase {
    __typename: 'Tweet';
    favorite_count: number;
    mediaDetails?: MediaDetails[];
    photos?: TweetPhoto[];
    video?: TweetVideo;
    conversation_count: number;
    news_action_type: 'conversation';
    quoted_tweet?: QuotedTweet;
    in_reply_to_screen_name?: string;
    in_reply_to_status_id_str?: string;
    in_reply_to_user_id_str?: string;
    parent?: TweetParent;
    possibly_sensitive?: boolean;
}

declare const Readability: any;
declare const TurndownService: any;
declare const document: any;
