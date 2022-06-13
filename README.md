# DistributedSJTUNewsApp
**The Distribute news client(JS) is a simple news application developed on HarmonyOS.**

Installation requirements • Install DevEco Studio • Set up the DevEco Studio development environment.The DevEco Studio development environment needs to depend on the network environment. It needs to be connected to the network to ensure the normal use of the tool.The development environment can be configured according to the following two situations 1.If you can directly access the Internet, just download the HarmonyOS SDK 2.If the network cannot access the Internet directly, it can be accessed through a proxy server • Generate secret key and apply for certificate

User guide • Download this Project • Open HUAWEI DevEco Studio, click File> Open> Then select and open this Project • Click Build> Build App(s)/Hap(s)>Build Debug Hap(s) to compile the hap package • Click Run> Run 'entry' to run the hap package

Note • You can choose to run the hap package on the simulator or the phone. • If you run it on the phone, you need to configure the signature and certificate information in the project's File> Project Structure> Modules> Signing Configs.

**Brief description of project functions:**

- Main page: 

  - <img src="https://s2.loli.net/2022/06/13/DGBtJa5FmVEMn9P.png" height="300px" width="150px" >

  - Display classifiable list of SJTU news, Including five categories: life, student work, sports, employment, community. Each news will show the title and the title picture.

- News Details page: 

  - <img src="https://s2.loli.net/2022/06/13/Vvf7CmKpzLYtTH2.png" height="300px" width="150px" >

  - After browsing the news, users can click "Back" to return to the main screen.

  - Includes news headlines, dates, news pictures, news content information, as well as likes, favorites, read statistics, and a comment area for additional comments.

  - After reading the news, users can choose to like, favorite, share, or comment, or click the "一键三连" button for quick operation.

  - By clicking the share button, users can search for devices to share and sync the news details page to another device.
