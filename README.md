# DildoFox

Version 0.5 (Beta) (Progress Test Build) (Latest)

Notes & Instructions:

This is my Firefox configuration optimized for maximum privacy & security. Packaged into a fully functional browser that works instantly.

I Felt that the Arkenfox user.js and other profiles you can find online are a little incomplete, so I built my own from scratch. I used Arkenfox as a template adding settings and changing things a I saw fit. I feel it's much more complete than other user.js files and have packaged it up for others to test and use as a template to make their own changes. But as the build progressed I started making more changes and adding things like the mozilla.cfg file and policies.json file untill eventually I decided to package all configurations into a deployable installer package that had pre installed extensions and had been completely revamped and edited on the source-code level. I like to think of this setup as a happy little cross between LibreWolf, Tor Browser and the ArkenFox guide lines.

This build not only uses policies.json and mozilla.cfg configuration files, but has been completely changed on the source code level to reduce telemetry and tracking as much as possible. The browser can be used right out the box with all configuration changes and without having to create profiles or change settings or install extensions on first boot which helps to greatly reduce fingerprinting.

There is a selection of extensions pre-installed which will also work out the box and don't need to be installed as the .xpi files are located in the /distribution folder. All you need to do is enable each extension permission to run in private browsing mode, as private mode is set to always on, then configure the extensions to suit your needs. It also would not hurt to disable the extensions from updating automatically while you're at it.

Included Extensions;

- UBlock Origin 
- Privacy Badger 	
- NoScript Security Suite 	
- TOR Control 	
- UserAgentSwitcher & Manager 	
- Cookie Auto-Delete 	
- Canvas Blocker  

Configuring TOR:

The TOR Control extension is installed in this build. To configure, set Tor Control to allow in private browsing mode under the extensions manager. Then go to the extension and click the on/off button. This will bring up the options menu, where you need to set the PATH to the ROOT directory the tor.exe file is located in. By default it is; C:\Program Files\DildoFox\DildoFox Config Files\Tor Control Configuration\Tor You can also adjust your webRTC settings from this page. Once you have set the PATH to the directory the tor.exe is located in, move to the C:\Program Files\DildoFox\DildoFox Config Files\Tor Control Configuration\Agent directory and run the 'install.bat' file. Now TOR is configured to use with DildoFox.

Remember to configure CookieAutoDelete. 'Enable Auto-Cleaning' is 'off' by default so you need to make sure to check this. In the settings menu, switch time it takes to clear cookies from 15 seconds to 1 second and check all boxes under 'Automatic Cleaning Options' and also check all the boxes under the 'Other Browsing Data Clean Up' section to ensure you clear all site data when exiting a tab and check the box that says 'Enable support for Container Tabs.

The Default Search Engines have been removed except DuckDuckGo. SearX and Brave have been added. Other Search Engines such as Google, Bing and Twitter have all been disabled and removed via the policies.json file under the extensions branch. The default Search Engine is set to DuckDuckGoLite. * I borrowed this line of code from LibreWolf as I was having a few problems with this particular section. *

Upon startup, the only settings you should need to change are; Enable Extensions to work in private browsing mode, configure your extensions and add them to your toolbar for easy adjustments and access. You should also enter about:profiles and delete the second not in use default profile.

The configuration settings found within this browser provide about 90% functionallity with everyday browsing, however;

**** SOME SITES WILL BREAK ****

Remember to adjust your javascript settings on a per site basis using NoScript.

The mozilla.cfg file is mostly made up of prefLock settings, so if something is not working for you or you need to edit some settings you will have to configure this file as most of the changed settings will be locked in the about:config editor.

(dom.storage.enable) is set to false in this configuration for added privacy and security, but I find that this setting breaks a lot of sites and you also can't access your router with this setting. So instead of setting the preference with prefLock, I used the 'defaultPref' setting so it can be easily changed in about:config. If you are having problems with a certain page or need to access your router, try setting this preference to 'true'.

Several Javascript settings have also been set using the 'defaultPref' configuration to make for easy adjusting from the about:config editor without having to enter the mozilla.cfg file. These settings can break sites, so if something is not working for you, try setting these values to 'true'.

The javascript configurations using 'defaultPref' are as follows.

- ("pdfjs.enableScripting") 	
- ("pdfjs.enabledCache.state") 	
- ("javascript.options.baselinejit") 	
- ("javascript.options.wasm_baselinejit") 	
- ("javascript.options.ion")  

I have also removed all the deafult extension.xpi's from the \browser\features\ folder. Most of these are disabled in the settings so there was no need to keep them. Plus, it adds security and privacy by stopping these extensions from reaching out to the net while installing at first boot.

List of removed default extensions is as follows;

- formautofill@mozilla
- pictureinpicture@mozilla
- screenshots@mozilla	
- webcompat@mozilla	
- webcompat-reporter@mozilla

Within the custom installer I have added the configuration files for you to go over and use as a template for your own builds. I have also added a user.js file that you can edit and use on other profiles of other browser installs if you don't want locked preferences and want to use your own extensions. The user.js file also contains a detailed list of what each configuration change does to make it easier to adjust settings to your liking. It's based on Arkenfox, but more comprehensive and easier to read and understand. I have also added the extension .xpi files, but please note, that if you want to use these on your own image, you will need to alter the name of the files to the extension ID making sure to keep the .xpi file tag at the end. These Files can be found in C:\Program Files\DildoFox\Dildo Fox Config Files. The README text file can also be found here. PLEASE NOTE; that the mozilla.cfg file is named DildoFox.cfg in the Root directory, so if you want to make changes directly, please use this file. In the Config Files folder it is however named mozilla.cfg to be used for your own deployment.

Another note on folders;

While the ROOT directory in C:\Program Files\ is named DildoFox, the profile and cache folders are still named Mozilla. These can be found in their usual places at C:\Users\*UserName*\AppData\Local\Mozilla and C:\Users\*UserName*\AppData\Roaming\Mozilla respectively.

Since I used a custom installer for the package, this build of Firefox will not make any registry entries.

You may notice within the policies.json and mozilla.cfg files that there are no (sanitizeOnShutdown) settings. I had these enabled at first, but when I was testing the build, firefox would be extremely memory instensive in the task manager with many processes. It would also hang on exit leaving the processes running and would generate cache in the /Temp folder. After much trial and error, I found that it was the Sanitize settings doing this. They clashed with the history and cookie policies in place so I got rid of them. The browser is set to private browsing mode at all times so when you close Firefox, everything is cleared anyway. Not having the Sanitize settings, wont affect the privacy or the clearing of data at all. They are however enabled in the user.js and when using this file there are no issues with processes, caching or hanging on exit.

You should be reminded to delete all folders in the C:\Users\*User*\AppData\Local\Mozilla\Firefox\Profiles\*Profile*\ except \startupCache as this is the only folder that generates cache. And please, delete as much of your system cache as regularly as you can!

This build has a few problems with Captchas. If you are having trouble, things to check or alter are:

- Enable Javascript in NoScript 		
- Adjust UserAgentSwitcher or Reset Settings to Default
- Change Tor Identity

Usually a combination of these will fix Captcha problems, but beware; not all the time. An endless loop of captchas sometimes occurs and is usually due to a UserAgent setting.

A lot of URL's that ping back to FireFox servers have been removed except the extensions repository. All screenshot functions that send data back to firefox have been completely removed from the source code by editing the omni.ja file. 'Telemetry', 'Anonymous Content', 'Observers', 'ScreenShot' and 'Heuristics' functions have been about 95% completely removed from the browser/modules omni.ja file and the only telemetry and observers that remain are the ones that were needed to maintain core functionality.

Edited omni.ja files can be found in the /DildoFox/DildoFox Config Files folder.

I plan to use this technique on all files and folders within both omni.ja files, but at this stage, just the browser/modules folder has had the complete re-work. It's a very time consuming and frustrating process so please be patient, but my next update will have all files contained within browser/omni.ja re-worked followed by later releases having the Root/omni.ja file re-done. 

Another thing you may notice, is that DNS over HTTPS (DoH) is disabled and locked. This is because Firefox's default provider is Cloudflare, they are a large for-profit oganization and you can't trust any company that's primary goal is financial gain. I locked the preference to encourage you guys to use your own host DNS service. I recommend Simple-DNSCrypt using multi-routed Anonymized DNSCrypt resolvers along with a well configured VPN. Install Simple-DNSCrypt, enable it, change your preferences to suit your needs and pick the resolvers you want to use. Then configure your VPN to use a custom DNS server, in this case, the local host which is usually 127.0.0.1 to enable encrypted Anonymized DNS queries working alongside your VPN. PLEASE NOTE: That while using Simple-DNSCrypt with Tor, you should change the listen address of Simple-DNSCrypt to 127.0.2.1 and enable 'Force TCP'. Use these settings along with a standalone VPN router as well as a Host VPN and TMAC Mac Changer and you have a decent setup, all the while avoiding Cloudflare. A program called Glary Utilities is also handy for erasing privacy threats from hidden cache and registry entries on your PC too, it is recommended to run one of these scans before you change IP on your host VPN.

I built this browser to help fellow Trolls bypass bans on message boards, in particular, ones that surpress free speech and restrict the discussion and sharing of critical information relating to current Global events. A lot of discussion sites like to block users using TOR, but since this is not the Tor browser and is only using the Tor Proxy service in cunjunction with spoofed user agent values, using this browser will give you access to sites that block Tor even though the service is being used. If you find yourself banned, simply open a new tab, close the tab you were banned on, let CookieAutoDelete clear the site data, switch browser user agent using UserAgentSwitcher and get a new Tor identity. Message boards tend to try and block Tor servers, so if you try to re-enter the forum and you are still banned, just switch tabs and Tor identity again and usually you'll get back in. If you use this browser correctly and with the settings in place, you should have a different browser fingerprint everytime you visit a page. Use www.amiunique.org or www.coveryourtracks.eff.org to check your fingerprint regularly.

The TOR Browser has many telemetry funcions and sends a lot of data to interested parties, not just to Government agencies but also to good hearted people who run servers to monitor predators. With all the edits to the code and the combination of Tor proxies along with forced HTTPS plus the randomized and always changing fingerprint that doesn't detect as TOR, as well as zero cache, extremely limited and quickly terminated cookies, this build has the potential to be a powerful tool in the Trolls arsenal.

I hope you enjoy trying this out and please leave feedback and suggestions as this is my first time doing anything like this and I am putting this out there to learn from others who are more well versed in this kind of thing. Please go over the configurations, test the browsers funcionallity and let me know where I can improve.

Thanks for taking the time to check this out and happy testing....

Cheers guys,

Edward Burbank

---------------------- Tools Used: -----------------------

- Firefox ESR 115.0.3 	
- LibreWolf
- Visual Studio Code 	
- Notepad++ 	
- Sublime Text 	
- 7zr
- winRar
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

But please respect Mozilla's Terms of Use.
