var a00013 =
[
    [ "i2c_master_config_t", "a00013.html#a00100", [
      [ "enableMaster", "a00013.html#a2419131a10906475fd31950f17ac8895", null ],
      [ "baudRate_Bps", "a00013.html#a2186844dc87bcde999fc12005f4c550a", null ],
      [ "enableTimeout", "a00013.html#a1c6831135c83c013d2a3cfc3e7210357", null ]
    ] ],
    [ "i2c_master_transfer_t", "a00013.html#a00087", [
      [ "flags", "a00013.html#a8835787e1b0f9a4b8868e7cbe53e45d5", null ],
      [ "slaveAddress", "a00013.html#a97891bd050609c6dcd1276714277e480", null ],
      [ "direction", "a00013.html#ac5b89dc9115b7760431c981e0c1fd443", null ],
      [ "subaddress", "a00013.html#ae7facb612714785d4e143e57d47a5af3", null ],
      [ "subaddressSize", "a00013.html#aeec8dccf4a49f03ff9a40f5982a24796", null ],
      [ "data", "a00013.html#a8c7f63bd1e7de04e40f5cd733f5c7388", null ],
      [ "dataSize", "a00013.html#a68e2dd69e1e34b1b505270e1e07e8a34", null ]
    ] ],
    [ "i2c_master_handle_t", "a00013.html#a00086", [
      [ "state", "a00013.html#add7ec18bc8239c5c87ffcec2fbcf5dd8", null ],
      [ "transferCount", "a00013.html#a5943d16f5ed6e7c4ebd334cdbc0e2afc", null ],
      [ "remainingBytes", "a00013.html#aca481b5d3ca6dce53cf440b534ff80c2", null ],
      [ "buf", "a00013.html#a9577474c0c4395355174df2b016108de", null ],
      [ "transfer", "a00013.html#a6858d3525f762d7aded20e6c95eb19fc", null ],
      [ "completionCallback", "a00013.html#a15b84b8a94c2b2e5ace0a695c79edd84", null ],
      [ "userData", "a00013.html#aad7df570c53adb2e80acd2ba0d39d109", null ]
    ] ],
    [ "i2c_master_transfer_callback_t", "a00013.html#gad292a48f957a9b76593c1779d9dce497", null ],
    [ "_i2c_master_flags", "a00013.html#gac938392418ba1a891983d11ef5c9f2a3", [
      [ "kI2C_MasterPendingFlag", "a00013.html#ggac938392418ba1a891983d11ef5c9f2a3a9cc49a1ca21e87058a7fbf733cce0e62", null ],
      [ "kI2C_MasterArbitrationLostFlag", "a00013.html#ggac938392418ba1a891983d11ef5c9f2a3a7b487779b58af99a7a8c179545f78ccd", null ],
      [ "kI2C_MasterStartStopErrorFlag", "a00013.html#ggac938392418ba1a891983d11ef5c9f2a3ab5cec1d9be7dc5fb2c106e2b87889517", null ]
    ] ],
    [ "i2c_direction_t", "a00013.html#gab49c827b45635206f06e5737606e4611", [
      [ "kI2C_Write", "a00013.html#ggab49c827b45635206f06e5737606e4611a93b476b469c2a4bfed5916b458ae9bb0", null ],
      [ "kI2C_Read", "a00013.html#ggab49c827b45635206f06e5737606e4611a3a7bb24dc8d1c1be8925603eeafe9b30", null ]
    ] ],
    [ "_i2c_master_transfer_flags", "a00013.html#ga87ea07668194cfb46c7c368d2cb42433", [
      [ "kI2C_TransferDefaultFlag", "a00013.html#gga87ea07668194cfb46c7c368d2cb42433ae80f7b768b1621e42ac965d3d23de5e2", null ],
      [ "kI2C_TransferNoStartFlag", "a00013.html#gga87ea07668194cfb46c7c368d2cb42433a5cb44bf860c0482c0ca0165cf0d31d8a", null ],
      [ "kI2C_TransferRepeatedStartFlag", "a00013.html#gga87ea07668194cfb46c7c368d2cb42433aadf112471ef12f194985a093cd9b9721", null ],
      [ "kI2C_TransferNoStopFlag", "a00013.html#gga87ea07668194cfb46c7c368d2cb42433afb8aeea71b5b7475e3d3df86220db566", null ]
    ] ],
    [ "_i2c_transfer_states", "a00013.html#gab08c1a0d50859637b4305687278941ee", null ],
    [ "I2C_MasterGetDefaultConfig", "a00013.html#gad69f2d63ea756dda60749ff6b09f587d", null ],
    [ "I2C_MasterInit", "a00013.html#ga29f967b3ae8487a36ba2a58deb01ccae", null ],
    [ "I2C_MasterDeinit", "a00013.html#gadcf7122f0a38d4d9da0f052fcb167957", null ],
    [ "I2C_GetInstance", "a00013.html#ga07cc6bd20f700249c335893427bf462a", null ],
    [ "I2C_MasterReset", "a00013.html#ga09137caccbe9a57f6b2ca5e1ce9bdc50", null ],
    [ "I2C_MasterEnable", "a00013.html#ga164d97e40eb5ad625a41ad43cf938153", null ],
    [ "I2C_GetStatusFlags", "a00013.html#ga441017241044ffdb828385e473f5fb58", null ],
    [ "I2C_MasterClearStatusFlags", "a00013.html#ga437271ffb955b77df0a5dee9ea80cc63", null ],
    [ "I2C_EnableInterrupts", "a00013.html#ga0f6f1f2fe150661f8eb0a072665a9020", null ],
    [ "I2C_DisableInterrupts", "a00013.html#gac3e053611231cc886bfa38831a1ac26e", null ],
    [ "I2C_GetEnabledInterrupts", "a00013.html#gae652236a25f1b4828d596f32190655f8", null ],
    [ "I2C_MasterSetBaudRate", "a00013.html#gafeab1d5249a8b39c8d9e1a54a85c23f0", null ],
    [ "I2C_MasterGetBusIdleState", "a00013.html#ga4b7617034ab51d77786141873fd6ee1c", null ],
    [ "I2C_MasterStart", "a00013.html#ga7664234966e4162e952b6d57efcaa8a6", null ],
    [ "I2C_MasterStop", "a00013.html#gaf46a8cc094fc18c6cadea8de71448723", null ],
    [ "I2C_MasterRepeatedStart", "a00013.html#ga8137f7b333aafe1e3ff6c9d3852b7dbd", null ],
    [ "I2C_MasterWriteBlocking", "a00013.html#ga3b4d71b59e118adc63afbc5434e5e7dd", null ],
    [ "I2C_MasterReadBlocking", "a00013.html#gaba04c62ee636dd8317c2235c3c82aa3b", null ],
    [ "I2C_MasterTransferBlocking", "a00013.html#ga35cae3a5b4aa50ce8db28e3eb703a027", null ],
    [ "I2C_MasterTransferCreateHandle", "a00013.html#ga31e3de02b57801c6896e6045c4a31268", null ],
    [ "I2C_MasterTransferNonBlocking", "a00013.html#gac7f76a04b6f6873c52ad176d58901fe9", null ],
    [ "I2C_MasterTransferGetCount", "a00013.html#ga7d720842e68161d2d52d56d119f20665", null ],
    [ "I2C_MasterTransferAbort", "a00013.html#gabb386e53b2bc64e29b2915bdfac36800", null ],
    [ "I2C_MasterTransferHandleIRQ", "a00013.html#gad091cd1857d2bd8ce64583739b3a35d5", null ]
];