export declare enum UpgradeFileType {
    /**
     * A single binary update image.
     */
    BIN = 0,
    /**
     * A zip file containing a manifest.json file that describes the contents of the zip file.
     */
    ZIP = 1
}
export declare enum UpgradeMode {
    /**
     * This mode is the default and recommended mode for performing upgrades due to it's ability to
     * recover from a bad firmware upgrade. The process for this mode is upload, test, reset, confirm.
     */
    TEST_AND_CONFIRM = 1,
    /**
     * This mode is not recommended. If the device fails to boot into the new image, it will not be able
     * to recover and will need to be re-flashed. The process for this mode is upload, confirm, reset.
     */
    CONFIRM_ONLY = 2,
    /**
     * This mode is useful if you want to run tests on the new image running before confirming it
     * manually as the primary boot image. The process for this mode is upload, test, reset.
     */
    TEST_ONLY = 3,
    /**
     * When this flag is set, the manager will immediately send the reset command after
     * the upload is complete. The device will reboot and will run the new image on its next
     * boot.
     */
    UPLOAD_ONLY = 4
}
export interface UpgradeOptions {
    /**
     * The estimated time, in seconds, that it takes for the target device to swap to the updated image.
     */
    estimatedSwapTime: number;
    /**
     * The type of firmware update file.
     */
    upgradeFileType: UpgradeFileType;
    /**
     * McuManager firmware upgrades can actually be performed in few different ways.
     * These different upgrade modes determine the commands sent after the upload step.
     *
     * @see UpgradeMode
     */
    upgradeMode?: UpgradeMode;
    /**
     * If true, erase application settings during upgrade (if supported by firmware). Defaults to false.
     */
    eraseAppSettings?: boolean;
}
export type FirmwareUpgradeState = 'NONE' | 'VALIDATE' | 'UPLOAD' | 'TEST' | 'RESET' | 'CONFIRM' | 'SUCCESS' | 'UNKNOWN';
declare class Upgrade {
    private onProgress?;
    private onStateChange?;
    private id;
    /**
     * Create a new Upgrade.
     *
     * @param bleId The BLE ID of the device to upgrade.
     * @param updateFileUriString The URI of the firmware update file.
     * @param updateOptions see @UpgradeOptions
     */
    constructor(bleId: string, updateFileUri: string, updateOptions: UpgradeOptions, onProgress?: ((progress: number) => void) | undefined, onStateChange?: ((state: FirmwareUpgradeState) => void) | undefined);
    /**
     * Perform the upgrade.
     */
    runUpgrade: () => Promise<void>;
    cancel: () => void;
    /**
     * Call to release native Upgrade class.
     * Failure to do so may result in memory leaks.
     */
    destroy: () => void;
}
export default Upgrade;
//# sourceMappingURL=Upgrade.d.ts.map