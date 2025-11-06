import McuManagerModule from './ReactNativeMcuManagerModule';
export var MCUBootMode;
(function (MCUBootMode) {
    MCUBootMode[MCUBootMode["MCUBOOT_MODE_SINGLE_SLOT"] = 0] = "MCUBOOT_MODE_SINGLE_SLOT";
    MCUBootMode[MCUBootMode["MCUBOOT_MODE_SWAP_USING_SCRATCH"] = 1] = "MCUBOOT_MODE_SWAP_USING_SCRATCH";
    MCUBootMode[MCUBootMode["MCUBOOT_MODE_UPGRADE_ONLY"] = 2] = "MCUBOOT_MODE_UPGRADE_ONLY";
    MCUBootMode[MCUBootMode["MCUBOOT_MODE_SWAP_USING_MOVE"] = 3] = "MCUBOOT_MODE_SWAP_USING_MOVE";
    MCUBootMode[MCUBootMode["MCUBOOT_MODE_DIRECT_XIP"] = 4] = "MCUBOOT_MODE_DIRECT_XIP";
    MCUBootMode[MCUBootMode["MCUBOOT_MODE_DIRECT_XIP_WITH_REVERT"] = 5] = "MCUBOOT_MODE_DIRECT_XIP_WITH_REVERT";
    MCUBootMode[MCUBootMode["MCUBOOT_MODE_RAM_LOAD"] = 6] = "MCUBOOT_MODE_RAM_LOAD";
    MCUBootMode[MCUBootMode["MCUBOOT_MODE_FIRMWARE_LOADER"] = 7] = "MCUBOOT_MODE_FIRMWARE_LOADER";
})(MCUBootMode || (MCUBootMode = {}));
export const bootloaderInfo = McuManagerModule?.bootloaderInfo;
//# sourceMappingURL=bootloaderInfo.js.map