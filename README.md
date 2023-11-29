# DildoFox

DildoFox (Vanilla) - Version: 0.9

**** Notes & Instructions: ****

This is my Custom "Firefox" Configuration "Optimized for Maximum Privacy & Security". Packaged into a Fully Functional Browser that Works Instantly.

I Felt that the "Arkenfox" "user.js" and other Profiles you can find online are a little incomplete, so I built my own from scratch. I used "Arkenfox" as a template, adding settings and changing things as I saw fit. I feel it's much more complete than other "user.js" files and have packaged it up for others to test and use as a template to make their own changes. As the build progressed I started making more changes and adding things like the "mozilla.cfg" file and "policies.json" file until eventually I decided to package all the configuration files into a deployable installer package that had pre installed extensions and was ready to run out box with no changes needed. I like to think of this setup as a happy little cross between "LibreWolf", "Tor-Browser" and the "ArkenFox" guide-lines.

This Browser has the Full Functionality a Regualr "FireFox" Browser has and with the Pre-Configured Settings and the Most Sensible Pre-Installed Extensions in place, there is NO reason that the "Privacy Concerned Individual" should NOT use this Browser as their "Daily Driver".

This Browser can be used right out the box with all Configuration Changes suited for Maximum-Privacy and Security pre-set in place. There is no need to create Profiles, change any Settings or Install Extensions on First Boot which helps to "Greatly Reduce Fingerprinting".

There is a selection of Extensions Pre-Installed which don't need to be Installed or Downloaded as the ".xpi" files are located in the "/distribution" folder. All you need to do is Enable each Extension Permission to Run in "PrivateBrowsing" Mode, then Configure the Extensions to suit your needs.

Included Extensions;

- UBlock Origin 
- Privacy Badger    
- NoScript Security Suite       
- UserAgentSwitcher & Manager 
- Canvas Blocker    
- Cookie Auto-Delete 
- I Still Don't Care About Cookies  
- Tor-Control

**** Configuring TOR ****

The "TOR-Control" Extension is Pre-Installed with this build. To Configure, set "Tor-Control" to "Allow" in "PrivateBrowsing" mode under the Extensions Manager. Then go to the Extension and click the "ON/OFF" button. This will bring up the options menu, where you need to set the "PATH" to the "DIRECTORY" the "tor.exe" file is located in. By Default it is; "C:\Program Files\DildoFox\Tor-Control\Tor". You can also adjust your "WebRTC" Settings from this page. Once you have set the "PATH" to the "DIRECTORY" the "tor.exe" is located in, move to the "C:\Program Files\DildoFox\Tor-Control\Agent" Directory and "Run" the "install.bat" file. "DildFox" is now configured to use the "Tor Service".

This Extension is Optional and "Manual Proxy-Configurations" can still be added from the "Settings-GUI".

**** Configuring CookieAutoDelete ****

"Enable Auto-Cleaning" is "OFF" by Default, so you need to make sure to check this. In the "Settings" Menu, switch "Time it Takes to Clear Cookies" from "15 Seconds" to "1 Second" and "Check All Boxes" under "Automatic Cleaning Options". Also "Check All Boxes" under the "Other Browsing Data Clean Up" section to ensure you "Clear All Site Data" when "Exiting a Tab", also "Check the Box" that says "Enable support for Container Tabs". You might want to "Disable Logs" too.

The Default Search Engines have Been Removed except "DuckDuckGo". "SearX", "Metager" and "StartPage" have also been added. Other Search Engines such as "Google", "Bing", "Amazon" and "Twitter" have all been Disabled and Completely Removed via the "policies.json" file under the Extensions Branch. The "Default Search Engine" is set to "DuckDuckGoLite", as this version of "DuckDuckGo" has less "Sponsored Content". 

**** I borrowed the Search Engine Code from "LibreWolf" as I was having a few problems with this particular section. If the Developers of "LibreWolf" object to me using this line of code, please Contact Me and I Will Change it Right Away. ****

Upon Startup, the only Settings you should need to change or alter are; "Enable Extensions to Work in "PrivateBrowsing" Mode", "Configure your Extensions", then add them to your Toolbar for easy adjustments and access.

The Configuration Settings found within this Browser provide about "98% Functionallity With Everyday Browsing", However;

**** SOME SITES WILL BREAK ****

Remember to adjust your "JavaScript" settings on a "Per Site Basis" using "NoScript".

If you are Having Trouble with "Captcha's", Things to Check or Alter are:

- Enable "Javascript" within "NoScript"         
- Adjust "UserAgentSwitcher" or "Reset Settings to Default"
- "Change or Disable" "Tor Identity"

Usually a Combination of these will fix "Captcha" Problems, BUT BEWARE; Not All The Time. An "Endless Loop" of "Captcha's" Sometimes Occurs and is Usually due to a "UserAgent" Setting.

All Settings within the ".cfg" and ".json" files are "UNLOCKED". This means that Any Setting can be Changed either from the "Settings-GUI" or the "about:config" Editor without leaving the Browser.  

A few other things like the "Updater.exe" and "PingSender.exe" have been Removed from the "Default FireFox Package".

The Configuration Files are included in "SourceCode.zip" file you will get when Downloading "DildoFox" from my "GitHub" page. Feel free to have a look at the Settings and Add, Remove or Change these as you see fit. Included in ".zip" package is also an Optional Extra "user.js" file. Unlike the ".cfg" file where the Settings are kept place, the "user.js" has a description of what all changes do to make for Easy Editing. This file can be used on your own Default "FireFox Browser Installs" with your own Extensions and Settings easily by simply "Pasting The File Into Your "Profiles" Folder". It is based on the "ArkenFox" Guidelines with many extra Configuration Changes, but Edited and Re-Written from Scratch to make it more Comprehensive and Easier to Read and Understand.

A Note on Folders;

While the Default Install Directory in "C:\Program Files\" is named "DildoFox", the "Profile and Cache Folders" are still Named "Mozilla". These can be Found in their "Usual Places" at "C:\Users\"UserName"\AppData\Local\Mozilla" and "C:\Users\"UserName"\AppData\Roaming\Mozilla" Respectively.

You may notice within the "policies.json" and "mozilla.cfg" files that there are no(sanitizeOnShutdown) Settings. I had these Enabled at first, but when I was testing the build, the Browser would be extremely "Memory Instensive" in the "Task Manager" with many "Processes". It would also "Hang on Exit" leaving the "Processes" running and would also generate "Cache" in the "/Temp" folder. After much Trial and Error, I found that it was the "Sanitize" settings doing this. They clashed with the "History" and "Cookie-Policies" in place so I got rid of them. The Browser is set to "PrivateBrowsing Mode" At All Times so when you close "DildoFox", Everything is  Cleared Anyway. Not having the "Sanitize" Settings, Won't affect the Privacy or the Clearing of Data at all. They are however Enabled in the Optional Extra "user.js" File, and when using this File there are No Issues with "Processes", "Caching" or "Hanging on Exit".

You should be Reminded to "Delete all Folders" in the "C:\Users\"User"\AppData\Local\Mozilla\Firefox\Profiles\"Profile"\" Directory as there is No "Caching" or "SafeBrowsing" Functions Enabled with this Browser. Within this Directory, the "\startupCache" is the "Only Folder that Generates Cache", and to Maintain a "High Level of Privacy and Security", you should clear the contents of this folder as often as you can. 

**** And please! Remember to Delete as much of your "System Cache" as Regularly as you can ****

Another thing you may notice, is that "DNS over HTTPS" (DoH) is disabled. This is because "Firefox's" Default Provider is "Cloudflare", they are a large For-Profit Organization and you can't trust any Company that's Primary Goal is Financial Gain. I set the Default of this preference to "OFF" to Encourage you guys to use your own "Host DNS Service". I Recommend "Simple-DNSCrypt" using "Multi-Routed Anonymized DNSCrypt Resolvers" along with a "Well Configured" "VPN". Install "Simple-DNSCrypt", Check "Enable DNSCrypt Service", change your Preferences to Suit your Needs and pick the "Resolvers" you want to use. Then Configure your "VPN" to use a "Custom DNS Server", in this case, the "Local-Host" which is usually "127.0.0.1" to Enable "Encrypted Anonymized DNS Queries" Working Alongside your "VPN". **** PLEASE NOTE: **** That while using "Simple-DNSCrypt" with a "System Based Tor-Client", you should change the "Listen Address" of "Simple-DNSCrypt" to "127.0.2.1" and Enable "Force TCP". Use these settings along with a "Stand-Alone VPN Router" as well as a "Host VPN" and program called "TMAC Mac-Changer" to "Spoof" your "Mac Address" and you have a Decent Setup, all the while avoiding "Cloudflare". A Program called "Glary Utilities" is also handy for "Erasing Privacy-Threats" from "Hidden Cache" and "Registry Entries" on your PC, it is Recommended to run one of these scans before you "Change IP" on your "Host VPN".

I built this Browser to Help Fellow Trolls Bypass Bans on Message Boards, In Particular, ones that Surpress "Free-Speech" and Restrict the Discussion and Sharing of "Critical Information Relating to Current Global events". A lot of Discussion Sites like to Block Users Using "TOR", but since "DildoFox" is not the "Tor-Browser" and is only using the "Tor Proxy Service" in cunjunction with "Spoofed" "UserAgent Values", using this Browser will give you access to sites that block "Tor" even though the Service is being used. If you find yourself Banned, simply open a "New Tab", close the "Tab" you were Banned on, let "CookieAutoDelete" clear the Site Data, Switch "Browser UserAgent Value" using "UserAgentSwitcher" and get a New "Tor Identity". Message Boards tend to try and block "Tor Servers", so if you try to re-enter the Forum and you are still Banned, just "Switch Tabs" and "Tor Identity" again and usually you'll get back in. If you "Use This Browser Correctly" and with the Settings in place, you should have a "Different Browser Fingerprint" everytime you visit a page. In fact, when you need to Enable "JavaScript" for a Website, because of the measures in place, along with proper use of "Canvas Blocker", you are possibly "Less Fingerprintable" than if "JavaScript" was Disabled because "Everything is Spoofed". Please Remember to use "www.amiunique.org" or "www.coveryourtracks.eff.org" to "Check Your Fingerprint Regularly".

I hope you enjoy trying this out and please leave Feedback and Suggestions as this is my first time doing anything like this. I am putting this out there to learn from others who are more well-versed in this kind of thing. Please go over the Configurations, test the Browsers Funcionallity and let me know where I can improve.

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

Here are some links to programs that I use and "Work Well In Conjunction With DildoFox":
 
- www.nordvpn.com   
- www.mullvad.net   
- www.simplednscrypt.org    
- www.technitium.com/tmac/  
- www.glarysoft.com
- www.torproject.org   

Other useful links to check out while testing the "Functionality of the Browser":

- www.amiunique.org
- www.coveryourtracks.eff.org
- www.check.torproject.org




**** LICENSE ****

Do what you want, I don't give a shit.

But please respect "Mozilla's" Terms of Use.
