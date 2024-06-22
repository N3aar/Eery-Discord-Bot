import BaseRequest from "@/shared/base/BaseRequest.js";
import type { DiscordUser } from "../types/discordTypes.js";

export default class DiscordAPI extends BaseRequest {
	constructor() {
		super("https://discord.com/api/v10", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bot ${process.env.TOKEN}`,
			},
		});
	}

	public async getUser(id: string): Promise<DiscordUser> {
		return await this.get(`users/${id}`);
	}
}
