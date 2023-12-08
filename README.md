# DildoFox (Vanilla)

Version: 0.9.2

**** Notes & Instructions: ****

This is my custom Firefox configuration optimized for maximum privacy & security. Packaged into a fully functional browser that works instantly.


I Felt that the Arkenfox user.js and other profiles you can find online are a little incomplete, so I built my own from scratch. I used Arkenfox as a template, adding settings and changing things as I saw fit. I feel it's much more complete than other user.js files and have packaged it up for others to test and use as a template to make their own changes. As the build progressed I started making more changes and adding things like the mozilla.cfg file and the policies.json file until eventually I decided to package all the configuration files into a deployable installer package that had pre installed extensions and was ready to run out box with no changes needed. I like to think of this setup as a happy little cross between LibreWolf, Tor-Browser and the ArkenFox guide-lines.


This browser has the full functionality a regualr FireFox browser has and with the pre-configured settings and the most sensible pre-installed extensions in place, there is NO reason that the privacy concerned individual should NOT use this browser as their daily driver.


This browser can be used right out the box with all configuration changes suited for maximum-privacy and security pre set in place. There is no need to create profiles, change any Settings or install extensions on first boot which helps to greatly reduce fingerprinting.


There is a selection of extensions pre-installed which don't need to be installed or downloaded as the .xpi files are located in the "/distribution" folder. All you need to do is enable each extension permission to run in private browsing mode, then configure the extensions to suit your needs.

Included Extensions;

- UBlock Origin 
- Privacy Badger 	
- NoScript Security Suite 		
- UserAgentSwitcher & Manager 
- Canvas Blocker	
- Cookie Auto-Delete 
- I Still Don't Care About Cookies	
- Tor-Control
- My IP (Custom Extension I Created for DildoFox)


**** Configuring TOR ****

The TOR-Control extension is pre-installed with this build. To configure, set Tor-Control to allow in private browsing mode under the extensions manager. Then go to the extension and click the ON/OFF button. This will bring up the options menu, where you need to set the PATH to the DIRECTORY the tor.exe file is located in. By default it is; "C:\Program Files\DildoFox\Tor-Control\Tor". You can also adjust your WebRTC settings from this page. Once you have set the PATH to the DIRECTORY the tor.exe is located in, move to the "C:\Program Files\DildoFox\Tor-Control\Agent" directory and Run the "install.bat" file as administrator. Now DildFox is configured to use the Tor Service.

This extension is optional and manual proxy-configurations can still be added from the settings-GUI.


**** Configuring CookieAutoDelete ****

Enable Auto-Cleaning is OFF by default, so you need to make sure to check this. In the settings menu, switch time it takes to clear cookies from 15 Seconds to 1 Second and check all boxes under automatic cleaning options. Also check all boxes under the other browsing data clean ip section to ensure you clear all site data when exiting a tab, also check the box that says enable support for container tabs. You might want to disable the logs counter too.


The default search engines have Been removed except DuckDuckGo. SearX, Metager and StartPage have also been added. Other search engines such as Google, Bing, Amazon and Twitter have all been disabled and completely removed via the policies.json file under the extensions branch. The default search engine is set to DuckDuckGoLite, as this version of DuckDuckGo has less sponsored content. 

**** I borrowed the search engine code from LibreWolf as I was having a few problems with this particular section. If the developers of LibreWolf object to me using this line of code, please contact me and I will change it right away. ****


Upon startup, the only settings you should need to change or alter are; enable extensions to work in private browsing mode, configure your extensions", then add them to your toolbar for easy adjustments and access.


The configuration settings found within this Browser provide about 98% functionallity With everyday browsing, however;

**** SOME SITES WILL BREAK ****

Remember to adjust your JavaScript settings on a per site basis" using NoScript.

If you are having trouble with Captcha's, things to check or alter are:

- Enable Javascript within NoScript 		
- Adjust UserAgentSwitcher or reset settings to default
- Change Tor identity

Usually a combination of these will fix Captcha problems, BUT BEWARE; not all the time. An endless loop of Captcha's sometimes occurs and is usually due to a UserAgent setting.


All settings within the .cfg and .json files are UNLOCKED. This means that any setting can be changed either from the settings-GUI or the about:config editor without leaving the browser.  


A few things like the updater.exe and pingsender.exe have been removed from the default FireFox package.


The configuration files are included in sourcecode.zip file you will get when downloading DildoFox from my GitHub page. Feel free to have a look at the Settings and add, remove or change these as you see fit. Included in .zip package is also an optional extra user.js file. Unlike the .cfg file where the settings are kept place, the user.js has a description of what all changes do to make for Easy editing. This file can be used on your own default FireFox browser installs with your own Extensions and settings easily by simply pasting the file into your Profiles folder. It is based on the ArkenFox Guide-lines with many extra configuration changes, but edited and re-written from scratch to make it more comprehensive and easier to read and understand.


A Note on Folders;

While the default install directory in "C:\Program Files\" is named DildoFox, the profile and cache folders are still named Mozilla. These can be found in their usual places at "C:\Users\"UserName"\AppData\Local\Mozilla" and "C:\Users\"UserName"\AppData\Roaming\Mozilla" respectively.


You may notice within the policies.json and mozilla.cfg files that there are no (sanitizeOnShutdown) settings. I had these enabled at first, but when I was testing the build, the browser would be extremely memory instensive in the Task Manager with many processes. It would also hang on exit leaving the processes running and would also generate cache in the "/temp" folder. After much trial and error, I found that it was the Sanitize settings doing this. They clashed with the history and cookie-policies in place so I got rid of them. The browser is set to private browsing mode at all times so when you close DildoFox, everything is cleared anyway. Not having the Sanitize settings, won't affect the privacy or the clearing of data at all. They are however enabled in the optional extra user.js file, and when using this file there are no issues with processes, caching or hanging on exit".

You should be reminded to delete all folders in the "C:\Users\"User"\AppData\Local\Mozilla\Firefox\Profiles\"Profile"\" directory as there is no caching" or safe browsing functions enabled with this browser. Within this directory, the "\startupCache" folder is the only one that generates cache", and to maintain a high level of privacy and security, you should clear the contents of this folder as often as you can. 

**** And please! Remember to delete as much of your system cache as regularly as you can ****


Another thing you may notice, is that DNS over HTTPS (DoH) is disabled. This is because Firefox's default provider is Cloudflare, they are a large for-profit organization and you can't trust any company that's primary goal is financial gain. I set the default of this preference to OFF to encourage you guys to use your own host DNS service". I recommend Simple-DNSCrypt using multi-Routed anonymized DNSCrypt resolvers along with a well configured VPN. Install Simple-DNSCrypt, check enable DNSCrypt service, change your preferences to suit your needs and pick the resolvers you want to use. Then configure your VPN to use a custom DNS server, in this case, the local-host which is usually 127.0.0.1 to Enable encrypted anonymized DNS queries working alongside your VPN. **** PLEASE NOTE: **** That while using Simple-DNSCrypt with a system based Tor client, you should change the listen address" of Simple-DNSCrypt to 127.0.2.1 and enable force TCP. Use these settings along with a stand-alone VPN router" as well as a host VPN and program called TMAC Mac-Changer to spoof your Mac address and you have a decent Setup, all the while avoiding Cloudflare. A program called Glary Utilities is also handy for erasing privacy-threats from hidden cache and registry entries on your PC, it is recommended to run one of these scans before you change IP on your host VPN.


I built this browser to help fellow Trolls bypass bans on message boards, in particular, ones that surpress free-speech and restrict the discussion and sharing of critical information relating to current global events. A lot of discussion sites like to block users using Tor, but since DildoFox is not the Tor-Browser and is only using the Tor proxy service in cunjunction with spoofed UserAgent values, using this browser will give you access to sites that block Tor even though the service is being used. If you find yourself banned, simply open a new tab, close the tab you were banned on, let CookieAutoDelete clear the site data, switch browser UserAgent value using UserAgentSwitcher and get a new Tor identity. Message boards tend to try and block Tor servers, so if you try to re-enter the Forum and you are still banned, just switch tabs and Tor identity again and usually you'll get back in. If you use this browser correctly and with the Settings in place, you should have a different browser fingerprint everytime you visit a page. In fact, when you need to enable JavaScript for a website, because of the measures in place, along with proper use of Canvas Blocker, you are possibly less fingerprintable than if JavaScript was disabled because everything is spoofed. Please remember to use "www.amiunique.org" or "www.coveryourtracks.eff.org" to check your fingerprint regularly".


I hope you enjoy trying this out and please leave feedback and suggestions as this is my first time doing anything like this. I am putting this out there to learn from others who are more well-versed in this kind of thing. Please go over the configurations, test the browsers funcionallity and let me know where I can improve.


Thanks for taking the time to check this out and happy testing....

Cheers guys,

Edward Burbank


---------------------- Tools Used: -----------------------

- Firefox ESR 115.4.0
- LibreWolf
- ArkenFox
- Visual Studio Code 	
- Notepad++ 	
- Sublime Text 	
- 7zr
- WinRAR
- Windows Terminal
- Photoshop
- InstallForge 	
- Resource Hacker 	
- GitHub    


---------------------- LINKS: ------------------------------

Here are some links to programs that I use and work well in conjunction with DildoFox:
 
- www.nordvpn.com 	
- www.mullvad.net 	
- www.simplednscrypt.org 	
- www.technitium.com/tmac/ 	
- www.glarysoft.com
- www.torproject.org   

Other useful links to check out while testing the functionality of the browser:

- www.amiunique.org
- www.coveryourtracks.eff.org
- www.check.torproject.org


**** LICENSE ****

Do what you want, I don't give a shit.

But please respect "Mozilla's" Terms of Use.
