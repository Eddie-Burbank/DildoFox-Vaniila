# Dildofox (Vanilla)

dildofox.com

Version: 0.9.9.3

**** Minor Update: ****

The default window size has been changed again and is now set to 1400x900 from 1280x900.

The PDF viewer function has been re-enabled within the polices file.

A custom homepage has been set to a browser specific landing page from dildofox.com.

DuckDuckGo has returned as the default URLbar search engine.

Default Proxy Setting has been set to Auto-Detect.

Home button widget has been added to the toolbar.

Search bar has been added to the toolbar.

The local-settings.js file has been re-named to autoconfig.js to make way for further configuration changes.

The Proxy List found within your install location has been updated for the month of April.

**** WHATS NEW ****

I have updated Dildofox to give it some extra functionality and make it easier to use for the everyday person.

The (dom.storage) config is now at it's default value to 'True'. This setting greatly increases security but also breaks sites and denies access to your router. I changed to setting to increase basic usability. It is recommended to enter the 'about:config' editor and set this 'False' and revert back to 'True' only when you need to.

The browser no longer defaults to Private Browsing mode. According to LibreWolf, this setting makes you more fingerprintable so I disabled it. To compensate, the following sanitize settings have been added to the .cfg file:

- defaultPref("privacy.sanitize.sanitizeOnShutdown", true); 
- defaultPref("privacy.clearOnShutdown.cache", true);
- defaultPref("privacy.clearOnShutdown.cookies", true);
- defaultPref("privacy.clearOnShutdown.downloads", true);
- defaultPref("privacy.clearOnShutdown.formdata", true);
- defaultPref("privacy.clearOnShutdown.history", true);
- defaultPref("privacy.clearOnShutdown.offlineApps", true);
- defaultPref("privacy.clearOnShutdown.sessions", true);
- defaultPref("privacy.clearOnShutdown.sitesettings", true);
- defaultPref("privacy.sanitize.timeSpan", 0);

The OCSP settings are now in their default state.

The Login Manager has been re-enabled in the policies.json file, however, it is recommended to use a third party password manager.

These default extensions have been removed:

- screenshots.xpi
- webcompat.xpi
- webcompatreporter.xpi

The 'Foxy Proxy' extension has also been added along with a list of 100's HTTP, HTTPS, Socks4 & Socks5 proxy servers which is up to date as of today (1st March 2024) and can be found in the '\Proxy List' folder of your default install location.

**** ABOUT ****

Dildofox (Vanilla) is a privacy and security based fork of the Firefox ESR 115 web browser. With over 400 policy and configuration changes based on the 'Arkenfox' guidelines, plus a selection of extensions to aid in the spoofing of the browser fingerprint and IP address, Dildofox has the potential to be a powerful tool in the Trolls arsenal.

Since everything is included in the installer image of the browser and ready run right out the box with no configuration changes needed, there is no need to mess around with user.js files, creating profiles or downloading extensions which helps to greatly reduce the browser fingerprint.

Unlike the upcoming (Archangel) variant of Dildofox, the (Vanilla) version keeps all original Firefox source-code intact. This is useful for those wanting to use a private and secure web browser with all the modern features Mozilla provides.

A handful of default .exe and .xpi files such as the PingSender and WebCompatReporter have been removed from the package to increase security and limit the browsers ability to send outgoing data further than just the configuration changes alone.

The settings in place are designed to find a happy balance of privacy, security and usability. While a good portion of the settings in place are based on the 'Arkenfox' Firefox Security Guide, many extra ones have been added by me to boost the privacy of the browser.

**** Google Proof ****

While 'Google Safe Browsing' is a nice security feature, it has been completely removed from Dildofox using over 30 configuration changes. This is because in order for the function to work, data of visited URL's and Downloads are all sent to Google servers to be monitored. Since this is a privacy based browser designed for the Cave Dwelling Troll, all URL's that report to either Google or Mozilla have either been disabled or removed to ensure that your data stays private.

**** Unlocked Settings ****

All configuration and policy changes are 'Unlocked' and can easily be edited from the Settings GUI or the 'about:config' and 'about:policies' editors. You are encouraged to play around with the configuration and change things to suit your own needs and threat model.

The settings and polices in place are too great in number to list on this page, some features will be listed below and you can view the full configuration files from the (Source Code) page of this site. 

**** Configuration Features Include: ****

- NO Telemetry
- NO Stored Cookies
- Resist Finger Printing Functions
- HTTPS Only Mode
- NO Google 'Safe Browsing'
- Spoofed User-Agent
- Ability to Browse .onion Domains
- Activity Stream Removed
- NO Outgoing Pings
- NO DRM Content
- NO Cache
- NO History
- Window Letterboxing
- Container Tabs
- NO Mozilla Reporting
- Spoofed Language
- NO Sponsored Content
- NO Location Service
- Pocket Disabled
- WebRTC Disabled

- Plus Many, Many More...

Also included in Dildofox (Vanilla) is a selection of Proxy tools to help get past those nasty message board bans. The proxy configuration extension, 'Foxy Proxy Standard' is installed by default and can be used to configure and store multiple HTTP, HTTPS, Socks4 & Socks5 proxies and easily switch IP address in a matter of seconds. To compliment this extension, I have added a list of 100's of Proxy Servers of all protocols which can be found in your Dildofox installation folder. The list is current and will be updated with every update of Dildofox, there is also a link in the .txt file where you can find an updated list.

**** Tor Proxy Service ****

A TOR Proxy Service is also included in the form of the 'Onion Control' extension. This extension routes all your browser traffic through the TOR Network masking your real IP address and greatly increasing anonymity. The extension also allows you change TOR identities and IP address in seconds without having to close the browser or reset the extension. All required files such as the tor.exe are included in the installed package of Dildofox and you don't need to download any extra components. Instructions on how to setup and configure Onion Control can be found in the README file on the (Source Code) page of this site and in the '\Tor-Control' folder of your Dildofox intallation directory.

**** No JavaScript ****

The extension 'NoScript Security Suite' is also included and installed by default in Dildofox. This extension blocks many scripts that run on web pages which can be privacy concerning or even potentially harmful. By default the extension is set to 'Block All' so you will need to use this extension from your tool-bar to allow certain sites to display javascript elements. Unfortunately many sites use javascript and some sites you visit will break with this enabled, it is best to configure a 'White List' of your most visited sites you trust to save a bit of messing around.

**** A Different Browser Fingerprint Every Site You Vist ****

With the combination of 'Resist-Fingerprinting' settings in place including the 'Letterboxing' config which prevents un-natural window size when resizing the browser window, along with the 'NoScript', 'Canvas Blocker' and 'User-Agent Switcher' extensions you will actually have a different browser fingerprint on every page you visit. Dildofox takes a different approach to the 'Tor Browser', where the practice is to blend in. Instead, with the current configuration, the browser fingerprint is constantly changing making you appear as a different user every time you visit a site.

********* Notes & Instructions: *********

This is my custom Firefox configuration optimized for maximum privacy & security. Packaged into a fully functional browser that works instantly.

I Felt that the Arkenfox user.js and other profiles you can find online are a little incomplete, so I built my own from scratch. I used Arkenfox as a template, adding settings and changing things as I saw fit. I feel it's much more complete than other user.js files and have packaged it up for others to test and use as a template to make their own changes. As the build progressed I started making more changes and adding things like the mozilla.cfg file and the policies.json file until eventually I decided to package all the configuration files into a deployable installer package that had pre installed extensions and was ready to run out box with no changes needed. I like to think of this setup as a happy little cross between LibreWolf, Tor-Browser and the ArkenFox guide-lines.

This browser has the full functionality a regular Firefox browser has and with the pre-configured settings and the most sensible pre-installed extensions in place, there is NO reason that the privacy concerned individual should NOT use this browser as their daily driver.

This browser can be used right out the box with all configuration changes suited for maximum-privacy and security pre set in place. There is no need to create profiles, change any Settings or install extensions on first boot which helps to greatly reduce fingerprinting.

There is a selection of extensions pre-installed which don't need to be installed or downloaded as the .xpi files are located in the "\distribution" folder. All you need to do is configure the extensions to suit your needs.

Included Extensions;

- UBlock Origin
- Privacy Badger
- NoScript Security Suite
- UserAgentSwitcher & Manager
- Canvas Blocker
- Cookie Auto-Delete
- Foxy Proxy Standard
- Tor-Control
- My IP: (Custom Extension I Created for Dildofox)

**** Configuring TOR ****

The TOR-Control extension is pre-installed with this build. To configure, set Tor-Control to allow in private browsing mode under the extensions manager. Then go to the extension and click the ON/OFF button. This will bring up the options menu, where you need to set the PATH to the DIRECTORY the "tor.exe" file is located in. By default it is; "C:\Program Files\Dildofox\Tor-Control\Tor". You can also adjust your WebRTC settings from this page. Once you have set the PATH to the DIRECTORY the "tor.exe" is located in, move to the "C:\Program Files\Dildofox\Tor-Control\Agent" directory and Run the "install.bat" file as administrator. Now DildFox is configured to use the Tor Service.

This extension is optional and manual proxy-configurations can still be added from the settings-GUI, or by using the recently added Foxy Proxy extension.

**** Configuring CookieAutoDelete ****

Enable Auto-Cleaning is OFF by default, so you need to make sure to check this. In the settings menu, switch time it takes to clear cookies from 15 Seconds to 1 Second and check all boxes under automatic cleaning options. Also check all boxes under the other browsing data clean ip section to ensure you clear all site data when exiting a tab, also check the box that says enable support for container tabs. You might want to disable the logs counter too.

The default search engines have Been removed except DuckDuckGo. SearX, Metager and StartPage have also been added. Other search engines such as Google, Bing, Amazon and Twitter have all been disabled and completely removed via the policies.json file under the extensions branch. The default search engine is set to DuckDuckGoLite, as this version of DuckDuckGo has less sponsored content.

**** I borrowed the search engine code from LibreWolf as I was having a few problems with this particular section. If the developers of LibreWolf object to me using this line of code, please contact me and I will change it right away. ****

The configuration settings found within this Browser provide about 99% functionallity With everyday browsing, however;

**** SOME SITES WILL BREAK ****

Remember to adjust your JavaScript settings on a per site basis" using NoScript.

If you are having trouble with Captcha's, things to check or alter are:

- Enable Javascript within NoScript
- Adjust UserAgentSwitcher or reset settings to default
- Disable or change settings on Canvas Blocker
- Change Tor identity

Usually a combination of these will fix Captcha problems, BUT BEWARE; not all the time. An endless loop of Captcha's sometimes occurs and is usually due to a UserAgent or Canvas setting.

All settings within the .cfg and .json files are UNLOCKED. This means that any setting can be changed either from the settings-GUI or the about:config editor without leaving the browser.

A few things like the updater.exe and pingsender.exe have been removed from the default FireFox package.

The configuration files are included in sourcecode.zip file you will get when downloading Dildofox from my GitHub page. Feel free to have a look at the Settings and add, remove or change these based on your own threat model or as you see fit.

A Note on Folders;

While the default install directory in "C:\Program Files" is named Dildofox, the profile and cache folders are still named Mozilla. These can be found in their usual places at "C:\Users\"UserName"\AppData\Local\Mozilla" and "C:\Users\"UserName"\AppData\Roaming\Mozilla" respectively.

You should be reminded to delete all folders in the "C:\Users\"User"\AppData\Local\Mozilla\Firefox\Profiles\"Profile" directory as there is no caching" or safe browsing functions enabled with this browser. Within this directory, the "\startupCache" folder is the only one that generates cache", and to maintain a high level of privacy and security, you should clear the contents of this folder as often as you can.

**** And please! Remember to delete as much of your system cache as regularly as you can ****

Another thing you may notice, is that DNS over HTTPS (DoH) is disabled. This is because Firefox's default provider is Cloudflare, they are a large for-profit organization and you can't trust any company that's primary goal is financial gain. I set the default of this preference to OFF to encourage you guys to use your own host DNS service". I recommend Simple-DNSCrypt using multi-Routed anonymized DNSCrypt resolvers along with a well configured VPN. Install Simple-DNSCrypt, check enable DNSCrypt service, change your preferences to suit your needs and pick the resolvers you want to use. Then configure your VPN to use a custom DNS server, in this case, the local-host which is usually 127.0.0.1 to Enable encrypted anonymized DNS queries working alongside your VPN. **** PLEASE NOTE: **** That while using Simple-DNSCrypt with a system based Tor client such as the Tor Expert Bundle, you should change the listen address of Simple-DNSCrypt to 127.0.2.1 and enable force TCP. Use these settings along with a stand-alone VPN router as well as a host VPN and program called TMAC Mac-Changer to spoof your Mac address and you have a decent Setup, all the while avoiding Cloudflare. A program called Glary Utilities is also handy for erasing privacy-threats from hidden cache and registry entries on your PC, it is recommended to run one of these scans before you change IP on your host VPN.

I built this browser to help fellow Trolls bypass bans on message boards, in particular, ones that surpress free-speech and restrict the discussion and sharing of critical information relating to current global events. A lot of discussion sites like to block users using Tor, but since Dildofox is not the Tor-Browser and is only using the Tor proxy service in cunjunction with spoofed UserAgent values, using this browser will give you access to sites that block Tor even though the service is being used. If you find yourself banned, simply open a new tab, close the tab you were banned on, let CookieAutoDelete clear the site data, switch browser UserAgent value using UserAgentSwitcher and get a new Tor identity. Message boards tend to try and block Tor servers, so if you try to re-enter the Forum and you are still banned, just switch tabs and Tor identity again and usually you'll get back in. If you use this browser correctly and with the Settings in place, you should have a different browser fingerprint everytime you visit a page. In fact, when you need to enable JavaScript for a website, because of the measures in place, along with proper use of Canvas Blocker, you are possibly less fingerprintable than if JavaScript was disabled because everything is spoofed. Please remember to use "www.amiunique.org" or "www.coveryourtracks.eff.org" to check your fingerprint regularly.

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

---------------------- LINKS: ---------------------------

Here are some links to programs that I use and work well in conjunction with Dildofox:

- www.perfect-privacy.com
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
