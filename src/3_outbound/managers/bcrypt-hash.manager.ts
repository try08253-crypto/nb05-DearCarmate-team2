import bcrypt from "bcrypt";
import { IBcryptHashManager } from "../../2_domain/port/managers/bcrypt-hash.manager";
import { IConfigManager } from "../../4_shared/utils/config.util";

export class HashManager implements IBcryptHashManager {

  constructor(private readonly _configManager: IConfigManager) { }

  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this._configManager.getParsed().SALT_LEVEL);
    return await bcrypt.hash(password, salt);
  };

  async verifyPassword(plainPassword: string, hashedPasswordFromDB: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPasswordFromDB);
  };
}
