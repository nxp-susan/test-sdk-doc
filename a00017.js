var a00017 =
[
    [ "spi_delay_config_t", "a00017.html#a00106", [
      [ "preDelay", "a00017.html#a24a2584817f03d1ace0a6cecc718bc09", null ],
      [ "postDelay", "a00017.html#a960b87887e431dabbb5641109cb56d90", null ],
      [ "frameDelay", "a00017.html#a9609e5c510bf5d0c120a403ed40aed42", null ],
      [ "transferDelay", "a00017.html#a7ea0733fc746e2bafe1c0999db7d4804", null ]
    ] ],
    [ "spi_master_config_t", "a00017.html#a00107", [
      [ "enableLoopback", "a00017.html#a384bc00ef4cd5b4e9cb6a4d48ec336bd", null ],
      [ "enableMaster", "a00017.html#aa033bd20cfbb1a14f0fd43f4b31bb27e", null ],
      [ "baudRate_Bps", "a00017.html#ae7695987e044d80983fd98a43812b1ea", null ],
      [ "clockPolarity", "a00017.html#a780c1f03e9670a2c38068a7bd49d4f13", null ],
      [ "clockPhase", "a00017.html#a7fbed6c387c99764c4f405fc7d9761ee", null ],
      [ "direction", "a00017.html#aace9261acfad8526f3d5b0b59346629a", null ],
      [ "dataWidth", "a00017.html#a018402d4d181b482376a878b38db740f", null ],
      [ "sselNumber", "a00017.html#af889de97327eb44641d8acc1f509d074", null ],
      [ "sselPolarity", "a00017.html#ab514b4866ee539808abd92a75ca8be51", null ],
      [ "delayConfig", "a00017.html#a787477e7b0ae7833dcbdb1c85fef361c", null ]
    ] ],
    [ "spi_slave_config_t", "a00017.html#a00108", [
      [ "enableSlave", "a00017.html#a9fcd3fae6d886c7dfd0c3fd4cd51e6fe", null ],
      [ "clockPolarity", "a00017.html#afd5bb71a7dc1908cb8a1860564601a45", null ],
      [ "clockPhase", "a00017.html#a56c657f64c2e26fe7dd772c1a77efb9e", null ],
      [ "direction", "a00017.html#ad4eb458a0c1a0c0934eec53d71b78ffb", null ],
      [ "dataWidth", "a00017.html#adc19252b2493f3f9d12f029e57908ce5", null ],
      [ "sselPolarity", "a00017.html#a0d0bceaaae2e5bae690fb2c3289f48f6", null ]
    ] ],
    [ "spi_transfer_t", "a00017.html#a00109", [
      [ "txData", "a00017.html#addc4f20760a1a62c4d20cdf9443f3af3", null ],
      [ "rxData", "a00017.html#a28b878b99d5ec790b5c8f3bafe140da0", null ],
      [ "dataSize", "a00017.html#ae003337c9398e5f5e3189f5b2ba6335b", null ],
      [ "configFlags", "a00017.html#a582eea734badd0049c98ea3cf89b3e4b", null ]
    ] ],
    [ "spi_master_handle_t", "a00017.html#a00089", [
      [ "txData", "a00017.html#a6cb4626f6b63c70fa21fe2e3338dc915", null ],
      [ "rxData", "a00017.html#a69f260bde2e1728233f835a148b2f51b", null ],
      [ "txRemainingBytes", "a00017.html#a62fa101ddfc970e7b6bcba0b2eb6b869", null ],
      [ "rxRemainingBytes", "a00017.html#a23b2531ea36b53e42cd6b2a3780d3017", null ],
      [ "totalByteCount", "a00017.html#a4e19f9299f123f181536c6bd4456e50a", null ],
      [ "state", "a00017.html#ae7933252a37be998d127217f34f6fd16", null ],
      [ "callback", "a00017.html#a445e70d437c917e6af1b4037bdbb6a3f", null ],
      [ "userData", "a00017.html#ab8d01b85149d749ab1c748bb5116b90e", null ],
      [ "dataWidth", "a00017.html#a11b51e4d88d3f8d9137a13ce301ed46c", null ],
      [ "lastCommand", "a00017.html#a4e66b572aa792a179028af5340bc83cb", null ]
    ] ],
    [ "FSL_SPI_DRIVER_VERSION", "a00017.html#gaeb6046de02dffe9248de71332fac246e", null ],
    [ "SPI_DUMMYDATA", "a00017.html#ga1541129ba8262e1649592b5109e2074c", null ],
    [ "SPI_RETRY_TIMES", "a00017.html#gaa4717c15ca9604c505a5e5c60df29ebe", null ],
    [ "spi_slave_handle_t", "a00017.html#gad267cfee3a876b2860217ff94f03f574", null ],
    [ "spi_master_callback_t", "a00017.html#gae9bd140aeb645efab6c7552b3994e01a", null ],
    [ "spi_slave_callback_t", "a00017.html#ga86b45b85e036adc762eed5bcd2a0491d", null ],
    [ "_spi_xfer_option", "a00017.html#gaaa2e2f2efa7be228c775fa239ab5ea03", [
      [ "kSPI_EndOfFrame", "a00017.html#ggaaa2e2f2efa7be228c775fa239ab5ea03a3bc0d76da8f97613467566dc39bee3b4", null ],
      [ "kSPI_EndOfTransfer", "a00017.html#ggaaa2e2f2efa7be228c775fa239ab5ea03a857a31be854542eafecfea1484ad38b5", null ],
      [ "kSPI_ReceiveIgnore", "a00017.html#ggaaa2e2f2efa7be228c775fa239ab5ea03a2616295b1939805764ffb815876b9eea", null ]
    ] ],
    [ "spi_shift_direction_t", "a00017.html#gaa68518c16202382c2e1f1c7c66a9d53d", [
      [ "kSPI_MsbFirst", "a00017.html#ggaa68518c16202382c2e1f1c7c66a9d53dae7b997e8cff761aab865cbd42c4c3989", null ],
      [ "kSPI_LsbFirst", "a00017.html#ggaa68518c16202382c2e1f1c7c66a9d53da20ac53684c3e1ad338553cecbfab94a9", null ]
    ] ],
    [ "spi_clock_polarity_t", "a00017.html#ga3e5a7cd043c9596779bc23b34cb3d1f9", [
      [ "kSPI_ClockPolarityActiveHigh", "a00017.html#gga3e5a7cd043c9596779bc23b34cb3d1f9a031c0ee2693cf1fd621e8b8cba676629", null ],
      [ "kSPI_ClockPolarityActiveLow", "a00017.html#gga3e5a7cd043c9596779bc23b34cb3d1f9acfc8257079c9604086622df6de326aea", null ]
    ] ],
    [ "spi_clock_phase_t", "a00017.html#ga9ad313685ade497f5cbcb71c74a1b4dc", [
      [ "kSPI_ClockPhaseFirstEdge", "a00017.html#gga9ad313685ade497f5cbcb71c74a1b4dcad15d61c6fd642f13101edbf401d0c72e", null ],
      [ "kSPI_ClockPhaseSecondEdge", "a00017.html#gga9ad313685ade497f5cbcb71c74a1b4dca18a98985c1f7dd56175e4a2724db3675", null ]
    ] ],
    [ "spi_ssel_t", "a00017.html#ga420a3d3f841957068648585b89fa66d1", [
      [ "kSPI_Ssel0Assert", "a00017.html#gga420a3d3f841957068648585b89fa66d1af64655214a47d11f960f633b1478b117", null ]
    ] ],
    [ "spi_spol_t", "a00017.html#gafd7e7bd8e060742346806ed8c8f1db4c", null ],
    [ "spi_data_width_t", "a00017.html#gafa691c5329a7325ee57c9f06fa295731", [
      [ "kSPI_Data4Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731a0cb8b30c67c53c6d53712d5bacc818ce", null ],
      [ "kSPI_Data5Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731a7232b4afb5bd82503252ce608638e6eb", null ],
      [ "kSPI_Data6Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731a6604fcf5c8bebf904c5b072295027bba", null ],
      [ "kSPI_Data7Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731a2c62d3d7d92866c97bb513d4e603518e", null ],
      [ "kSPI_Data8Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731ad6b98474a7f14ae7665b7b6d3355657c", null ],
      [ "kSPI_Data9Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731a4b864a74545165c2cf2dd74134fdadd1", null ],
      [ "kSPI_Data10Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731a2b2887663c9d025a4137263fc7984024", null ],
      [ "kSPI_Data11Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731a91e908a7a4725ab9df05549a2b034dec", null ],
      [ "kSPI_Data12Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731ad1cfe18fd912c0d25dc32e6ca9fa8f97", null ],
      [ "kSPI_Data13Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731ad8c2fa2e2f5bf137176dc736cc6a2531", null ],
      [ "kSPI_Data14Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731ae83435f494d1b9f3ce2f2da0ac03fc38", null ],
      [ "kSPI_Data15Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731add11012a8887066fad29e23c20d66af8", null ],
      [ "kSPI_Data16Bits", "a00017.html#ggafa691c5329a7325ee57c9f06fa295731abbc2566ba4eb2b5e5dc259a7c4f80bcf", null ],
      [ "kStatus_SPI_Busy", "a00017.html#ggabc6126af1d45847bc59afa0aa3216b04a703abdf7900047c4d13536480f3463ab", null ],
      [ "kStatus_SPI_Idle", "a00017.html#ggabc6126af1d45847bc59afa0aa3216b04a4e32c5b06dccaf4b81e2fd1679e1b560", null ],
      [ "kStatus_SPI_Error", "a00017.html#ggabc6126af1d45847bc59afa0aa3216b04a2ff91d774e93aed936b87ffaa18aaf9e", null ],
      [ "kStatus_SPI_BaudrateNotSupport", "a00017.html#ggabc6126af1d45847bc59afa0aa3216b04ab0f4d4de5f92524c9d33524f22a04e03", null ],
      [ "kStatus_SPI_Timeout", "a00017.html#ggabc6126af1d45847bc59afa0aa3216b04a496ced6fffc33d7bbeb01d203dfc4836", null ]
    ] ],
    [ "_spi_interrupt_enable", "a00017.html#gaedd690a0f91a0a9eb0fd573b57e31f67", [
      [ "kSPI_RxReadyInterruptEnable", "a00017.html#ggaedd690a0f91a0a9eb0fd573b57e31f67ac8d5eef4469ce888d4b2fb3c3b4fb215", null ],
      [ "kSPI_TxReadyInterruptEnable", "a00017.html#ggaedd690a0f91a0a9eb0fd573b57e31f67a0ec3e79b793d213ed30f74a338437129", null ],
      [ "kSPI_RxOverrunInterruptEnable", "a00017.html#ggaedd690a0f91a0a9eb0fd573b57e31f67a4acd737132f9c3cbd8cac500767289e5", null ],
      [ "kSPI_TxUnderrunInterruptEnable", "a00017.html#ggaedd690a0f91a0a9eb0fd573b57e31f67ad1f9b1e8b5209604a0eca8750f2876ad", null ],
      [ "kSPI_SlaveSelectAssertInterruptEnable", "a00017.html#ggaedd690a0f91a0a9eb0fd573b57e31f67ad1de0c0c42c7a707e305edbd3fde88b7", null ],
      [ "kSPI_SlaveSelectDeassertInterruptEnable", "a00017.html#ggaedd690a0f91a0a9eb0fd573b57e31f67a8f55948795fa8d256b5b6e520a95f145", null ]
    ] ],
    [ "_spi_status_flags", "a00017.html#ga17a846c851b3b17e6a1564a5fab48e09", [
      [ "kSPI_RxReadyFlag", "a00017.html#gga17a846c851b3b17e6a1564a5fab48e09a76b9aac1ff3856afdcb4eebdb3be9094", null ],
      [ "kSPI_TxReadyFlag", "a00017.html#gga17a846c851b3b17e6a1564a5fab48e09a3f796180c934ef3b688530986a844fe5", null ],
      [ "kSPI_RxOverrunFlag", "a00017.html#gga17a846c851b3b17e6a1564a5fab48e09ae281d12263ce63ef7c964f8564bea473", null ],
      [ "kSPI_TxUnderrunFlag", "a00017.html#gga17a846c851b3b17e6a1564a5fab48e09a4be82e1306daa139870673c30de9e238", null ],
      [ "kSPI_SlaveSelectAssertFlag", "a00017.html#gga17a846c851b3b17e6a1564a5fab48e09ab25cacb436c5e32113bd98c1ae151641", null ],
      [ "kSPI_SlaveSelectDeassertFlag", "a00017.html#gga17a846c851b3b17e6a1564a5fab48e09a1f153042fdb9681e7bd435c4cb9bd7c5", null ],
      [ "kSPI_StallFlag", "a00017.html#gga17a846c851b3b17e6a1564a5fab48e09a214bc23d48bafcc89241530e55195f76", null ],
      [ "kSPI_EndTransferFlag", "a00017.html#gga17a846c851b3b17e6a1564a5fab48e09a4f52f3d130ab947331e668c7856d8551", null ],
      [ "kSPI_MasterIdleFlag", "a00017.html#gga17a846c851b3b17e6a1564a5fab48e09a03ba57874691d230ad0f657cf01a7978", null ]
    ] ],
    [ "SPI_GetInstance", "a00017.html#gad823d00c394f6ca35c391dc178a25334", null ],
    [ "SPI_MasterGetDefaultConfig", "a00017.html#ga45c08fc078ae334b79fb844379140838", null ],
    [ "SPI_MasterInit", "a00017.html#gab36e8463576abeded221a1e5a1eec01c", null ],
    [ "SPI_SlaveGetDefaultConfig", "a00017.html#gac000b63ed033f57a9eee342a8c8e67f2", null ],
    [ "SPI_SlaveInit", "a00017.html#gae40850ce14ba74ea75b3eef79beecf8a", null ],
    [ "SPI_Deinit", "a00017.html#gaac0bc2b87ea2eb7eeba78d9449d4dbbf", null ],
    [ "SPI_Enable", "a00017.html#ga6d32506242b9596989efbbb2d030e997", null ],
    [ "SPI_GetStatusFlags", "a00017.html#ga9e7412ad45aeb7f620fe34559034ad2e", null ],
    [ "SPI_ClearStatusFlags", "a00017.html#ga794c7435fa108012df54bb6294f20505", null ],
    [ "SPI_EnableInterrupts", "a00017.html#gab87ea500d8f74369882afe52a81d1199", null ],
    [ "SPI_DisableInterrupts", "a00017.html#ga6289b192b135592b7b0996c05422be4d", null ],
    [ "SPI_IsMaster", "a00017.html#ga97782e786464ec2de946bd42e63aefbc", null ],
    [ "SPI_MasterSetBaudRate", "a00017.html#ga3ad4747ccc31c142c54af5639cd49328", null ],
    [ "SPI_WriteData", "a00017.html#ga92c1bd47d2ad7b45fc138fccb4bc1ace", null ],
    [ "SPI_WriteConfigFlags", "a00017.html#ga709b0d176b737a8009221565f3ae19e6", null ],
    [ "SPI_WriteDataWithConfigFlags", "a00017.html#gad3810513c85cb28f1dbf18b15614a09d", null ],
    [ "SPI_ReadData", "a00017.html#ga08dec9d9d6abf910589a591f1cc52f58", null ],
    [ "SPI_SetTransferDelay", "a00017.html#gad4071c9fc158109945e724872f4760b6", null ],
    [ "SPI_SetDummyData", "a00017.html#gac75808445b18f687387bea02892a5246", null ],
    [ "SPI_MasterTransferBlocking", "a00017.html#ga5b05095245ecf01258e64cc0458fb2e9", null ],
    [ "SPI_MasterTransferCreateHandle", "a00017.html#gad0d8eaa132d8c882d8a42286ecfbab64", null ],
    [ "SPI_MasterTransferNonBlocking", "a00017.html#ga820c78a32fa29735168d2e517f4881a1", null ],
    [ "SPI_MasterTransferGetCount", "a00017.html#gabde0dccfb0783d103b9cf57e0202582f", null ],
    [ "SPI_MasterTransferAbort", "a00017.html#gae90962a54978acf05ca7780489301eb4", null ],
    [ "SPI_MasterTransferHandleIRQ", "a00017.html#ga645d041a92bde312d6cf64517c618c41", null ],
    [ "SPI_SlaveTransferCreateHandle", "a00017.html#ga7c6a9ac8e0e410684970f3169404bafd", null ],
    [ "SPI_SlaveTransferNonBlocking", "a00017.html#ga93765aa3b062471b641f1b8f733b8b5b", null ],
    [ "SPI_SlaveTransferGetCount", "a00017.html#ga0dcd2ed8373d992ff93bb500e1442815", null ],
    [ "SPI_SlaveTransferAbort", "a00017.html#gae719048431a3e4fb334f83bd824a407b", null ],
    [ "SPI_SlaveTransferHandleIRQ", "a00017.html#gaac1ff8fc728c925d78b1237949ebf7c3", null ]
];