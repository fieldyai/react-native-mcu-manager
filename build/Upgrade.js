import ReactNativeMcuManager from './ReactNativeMcuManagerModule';
export var UpgradeFileType;
(function (UpgradeFileType) {
    /**
     * A single binary update image.
     */
    UpgradeFileType[UpgradeFileType["BIN"] = 0] = "BIN";
    /**
     * A zip file containing a manifest.json file that describes the contents of the zip file.
     */
    UpgradeFileType[UpgradeFileType["ZIP"] = 1] = "ZIP";
})(UpgradeFileType || (UpgradeFileType = {}));
export var UpgradeMode;
(function (UpgradeMode) {
    /**
     * This mode is the default and recommended mode for performing upgrades due to it's ability to
     * recover from a bad firmware upgrade. The process for this mode is upload, test, reset, confirm.
     */
    UpgradeMode[UpgradeMode["TEST_AND_CONFIRM"] = 1] = "TEST_AND_CONFIRM";
    /**
     * This mode is not recommended. If the device fails to boot into the new image, it will not be able
     * to recover and will need to be re-flashed. The process for this mode is upload, confirm, reset.
     */
    UpgradeMode[UpgradeMode["CONFIRM_ONLY"] = 2] = "CONFIRM_ONLY";
    /**
     * This mode is useful if you want to run tests on the new image running before confirming it
     * manually as the primary boot image. The process for this mode is upload, test, reset.
     */
    UpgradeMode[UpgradeMode["TEST_ONLY"] = 3] = "TEST_ONLY";
    /**
     * When this flag is set, the manager will immediately send the reset command after
     * the upload is complete. The device will reboot and will run the new image on its next
     * boot.
     */
    UpgradeMode[UpgradeMode["UPLOAD_ONLY"] = 4] = "UPLOAD_ONLY";
})(UpgradeMode || (UpgradeMode = {}));
class Upgrade {
    onProgress;
    onStateChange;
    id;
    /**
     * Create a new Upgrade.
     *
     * @param bleId The BLE ID of the device to upgrade.
     * @param updateFileUriString The URI of the firmware update file.
     * @param updateOptions see @UpgradeOptions
     */
    constructor(bleId, updateFileUri, updateOptions, onProgress, onStateChange) {
        this.onProgress = onProgress;
        this.onStateChange = onStateChange;
        this.id = String(Math.floor(100000000 + Math.random() * 900000000));
        ReactNativeMcuManager.createUpgrade(this.id, bleId, updateFileUri, updateOptions, (id, progress) => {
            this.onProgress?.(progress);
        }, (id, state) => {
            this.onStateChange?.(state);
        });
    }
    /**
     * Perform the upgrade.
     */
    runUpgrade = async () => ReactNativeMcuManager.runUpgrade(this.id);
    cancel = () => {
        ReactNativeMcuManager.cancelUpgrade(this.id);
    };
    /**
     * Call to release native Upgrade class.
     * Failure to do so may result in memory leaks.
     */
    destroy = () => {
        ReactNativeMcuManager.destroyUpgrade(this.id);
    };
}
export default Upgrade;
//# sourceMappingURL=Upgrade.js.map