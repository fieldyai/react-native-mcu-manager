import type { FirmwareUpgradeState, UpgradeOptions } from './Upgrade';
import Upgrade, { UpgradeMode, UpgradeFileType } from './Upgrade';
import { BootloaderInfo, bootloaderInfo, MCUBootMode } from './bootloaderInfo';
export declare const eraseImage: (bleId: string) => Promise<void>;
export declare const resetDevice: (bleId: string) => Promise<void>;
export { bootloaderInfo, Upgrade, UpgradeMode, UpgradeFileType, MCUBootMode };
export type { BootloaderInfo, FirmwareUpgradeState, UpgradeOptions };
//# sourceMappingURL=index.d.ts.map