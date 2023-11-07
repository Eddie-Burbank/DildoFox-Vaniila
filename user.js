/******

--- (Part 1) INDEX ---

* Startup
* Geolocation
* Language & Locale
* Telemetry
* Studies
* Crash Reports
* Captive Portal Detection / Network Checks
* Safe Browsing
* Network: DNS, Proxy & IPv6
* Search Bar: Suggestions, Autofill, History & Forms
* Passwords
* Disk Cache / Memory
* HTTPS / SSL / TLS / OSCP / CERTS
* User Interface
* Fonts
* Headers / Referers
* Containers
* Plugins / Media / WebRTC / WebG
* DOM (Document Object Model)
* Downloads
* Extensions
* Enhanced Tracking Protection & Cookies
* Shutdown & Sanitizing
* Resist Fingerprinting & Other Security
* Misc
* Remove URL's Linking to Firefox Servers



******/




/*********** Startup ***********/


// Disable about:config Warning:
user_pref("browser.aboutConfig.showWarning", false);


// Disable Default Browser Check:
user_pref("browser.shell.checkDefaultBrowser", false);


// Set Startup Page:
user_pref("browser.startup.page",  0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.pinned", "");

// Disable Activity Stream (Sponsored Content) on New Windows and Tabs:
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);


// Other Home Page and Tab Settings:
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);


// Disable Welcome Message:
user_pref("trailhead.firstrun.didSeeAboutWelcome", true);




/********** Geolocation **********/


// Disable Location Services:
user_pref("geo.enabled", false);
user_pref("geo.wifi.url", "");
user_pref("browser.search.geoip.url", "");


// Disable Region Updates:
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);


// Remove Geolocation Network URL:
user_pref("geo.provider.network.url", "");


// Disable Using the OS's Geolocation Service:
user_pref("geo.provider.ms-windows-location", false); 	// Windows
//user_pref("geo.provider.use_corelocation", false); 	// Mac
//user_pref("geo.provider.use_gpsd", false);			// Linux
//user_pref("geo.provider.use_geoclue", false);			// Linux




/*********** Language & Locale **********/


// Set Language for Displaying Web Pages:
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true);	// Hidden




/*********** Auto-Updates / Recommendations ***********/


// Disable Auto-Installing Firefox Updates:
user_pref("app.update.background.scheduling.enabled", false); // Windows
//user_pref("app.update.auto", false);						  // Linux & Mac


// Disable Updates:
user_pref("app.update.service.enabled", false);


// Disable Addons Recommendations:
user_pref("extensions.getAddons.showPane", false); 		// Hidden
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);




/*********** Telemetry ***********/


// Disable Telemetry:
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true); 	// Hidden
user_pref("toolkit.coverage.opt-out", true); 			// Hidden
user_pref("toolkit.coverage.endpoint.base.", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("beacon.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.server", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("network.allow-experiences", false);
user_pref("browser.discovery.enabled", false);




/*********** Studies ***********/


// Disable Studies:
user_pref("app.shield.optoutstudies.enabled", false);


// Disable Normandy:
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");




/********** Crash Reports ***********/


// Disable Crash Reports:
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);




/*********** Captive Portal Detection / Network Checks ***********/


// Disable Captive Portal Detection:
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);


// Disable Network Connection Checks:
user_pref("network.connectivity-service.enabled", false);




/********** Safe Browsing ***********/


// Disable Safe Browsing Service:
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);


// Disable List of Blocked URI:
user_pref("browser.safebrowsing.blockedURIs.enabled", false);


// Disable Fetch of Updates:
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");


// Disable Checks for Downloads:
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");


// Disable Checks for Unwanted Software:
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);


// Disable Safe Browsing Block Override:
user_pref("browser.safebrowsing.allowOverride", false);


// Additional Safe Browsing Settings:
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.id", "");
user_pref("browser.safebrowsing.maleware.enabled", false);
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryName", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.lists", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryName", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.lists", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhisMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.lists", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("services.sync.prefs.sync.browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");




/*********** Network: DNS, Proxy, IPv6 ***********/


// Disable Link Prefetching:
user_pref("network.prefetch-next", false);


// Disable DNS Prefetching:
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Disable Predictor / Prefetching:
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);


// Disable Link-Mouseover Opening Connection to Linked Server:
user_pref("network.http.speculative-parallel-limit", 0);


// Disable Mousedown Speculative Connections on Bookmarks and History:
user_pref("browser.places.speculativeConnect.enabled", false);


// Enforce No "Hyperlink Auditing" (Click Tracking)
user_pref("browser.send_pings", false);


// Only Send Pings if Send and Recieving Hosts Match:
user_pref("browser.send_pings.require_same_host", true);


// Disable IPv6:
user_pref("network.dns.disableIPv6", true);


// Set the Proxy Server to do any DNS Lookups When Using SOCKS:
user_pref("network.proxy.socks_remote_dns", true);


// Disable "GIO" Protocols as a Potential Proxy Bypass:
user_pref("network.gio.supported-protocols", "");		// Hidden


// Disable Using UNC Paths to Prevent Proxy Bypass:
user_pref("network.file.disable_unc_paths", true);		// Hidden


// Enable HTTP3 (HTTP-over-QUIC) Protocol:
user_pref("network.http.http3.enable", true);


// Enable Encrypted Client Hello (ECH/ESNI):
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.dns.http3_echconfig.enabled", true);
user_pref("network.dns.use_https_rr_as_altsvc", true);


// Disable DNS-Over-HTTPS:
user_pref("network.trr.mode", 5);


// Other DNS-Over-HTTPS Settings:
user_pref("doh-rollout.disable-heuristics", true);
user_pref("doh-rollout.home-region", "");


// Remove Special Permissions for Certain Mozilla Domains:
user_pref("permissions.manager.defaultsUrl", "");


// Use Punycode in Internationalized Domain Names to Eliminate Spoofing:
user_pref("network.IDN_show_punycode", true);


// Limit DNS Cache Entries:
user_pref("network.dnsCacheEntries", 100);


// DNS Cache Expiration Time (Seconds):
user_pref("network.dnsCacheExpiration", 60);


// Set Proxy to Auto-Configure:
user_pref("network.proxy.type", 4);




/*********** Search Bar: Suggestions, Autofill, History & Forms ***********/


// Disable Location Bar Using Search:
user_pref("keyword.enabled", true);


// Disable Location Bar Domain Guessing:
user_pref("browser.fixup.alternate.enabled", false);


// Disable Search Bar Suggestions:
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);


// Disable Location Bar Making Speculative Connections:
user_pref("browser.urlbar.speculativeConnect.enabled", false);


// Disable Location Bar Leaking Single Words to a DNS Provider (After Searching):
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);


// Disable Location Bar Contextual Suggestions:
user_pref("browser.urlbar.quicksuggest.scenario", "history");
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);


// Disable History:
user_pref("places.history.enabled", false);


// Disable Tab-To-Search:
user_pref("browser.urlbar.suggest.engines", false);


// Disable Colouring of Visited Links:
user_pref("layout.css.visited_links_enabled", false);


// Disable Form Autofill:
user_pref("browser.formfill.enable", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);


// Disable Prefetch Link on Hover:
user_pref("network.http.speculative-parallel-limit", 0);


// Disable Location Bar Suggestion Types:
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false)
user_pref("browser.urlbar.suggest.bestmatch", false);


// Disable Location Bar Autofill
user_pref("browser.urlbar.autoFill", false);


// Disable Browsing and Download History:
user_pref("places.history.enabled", false);


// Other URL-Bar Settings:
user_pref("browser.urlbar.shortcuts.bookmarks", false);
user_pref("browser.urlbar.shortcuts.history", false);
user_pref("browser.urlbar.shortcuts.tabs", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.bookmark", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.history", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.searches", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.topsites", false);
user_pref("services.sync.prefs.sync.browser.urlbar.showSearchSuggestionsFirst", false);


// Disable Weather Suggestions:
user_pref("browser.urlbar.suggest.weather", false);


// URL-Bar Search Engine Place Holder:
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.urlbar.placeholderName.private", "DuckDuckGo");


// Search Region:
user_pref("browser.search.region", "");


// Hide Bookmarks Toolbar:
user_pref("browser.toolbars.bookmarks.visibility", "never");


// Toolbar Theme:
user_pref("browser.theme.toolbar-theme", 0);


// Disable Spellcheck
user_pref("layout.spellcheckDefault", 0);


// Remove Bookmark Import Button:
user_pref("browser.bookmarks.addedImportButton", false);


// Don't Restore Bookmarks:
user_pref("browser.bookmarks.restore_default_bookmarks", false);




/*********** Passwords **********/


// Disable Autofill Login and Passwords:
user_pref("signon.autofillForms", false);


// Disable Formless Login Capture for Password Manager:
user_pref("signon.formlessCapture.enabled", false);


// Hardening Against Potential Credentials Phishing:
user_pref("network.auth.subresource-http-auth-allow", 1);


// Enforce No Automatic Authentication on Microsoft Sites:
user_pref("network.http.windows-sso.enabled", false);


// Other Password Settings:
user_pref("signon.firefoxRelay.feature", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.rememberSignons", false);




/*********** Disk Cache / Memory **********/


// Disable Cache:
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.memory.capacity", 0);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);

// Disable Media Cache in Private Browsing:
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);


// Disable Storing Extra Session Data:
user_pref("browser.sessionstore.privacy_level", 2);


// Disable Resuming Session from Crash:
user_pref("browser.sessionstore.resume_from_crash", false);


// Disable Page Thumbnail Collection:
user_pref("browser.pagethumbnails.capturing_disabled", true);	//Hidden


// Disable Favicons in Profile Folder:
user_pref("browser.shell.shortcutFavicons", false)


// Delete Temporary Files Opened With External Apps:
user_pref("browser.helperApps.deleteTempFileOnExit", true);


// Disable Automatic Firefox Start and Session Restore After Reboot:
user_pref("toolkit.winRegisterApplicationRestart", false);




/*********** HTTPS / SSL / TLS / OSCP / CERTS ************/


// Require Safe Negotiation:
user_pref("security.ssl.require_safe_negotiation", true);


// Disable TLS 1.3 0-RTT (Round Trip Time):
user_pref("security.tls.enable_0rtt_data", false);


// Disable TLS 1.0 and TLS 1.1:
user_pref("security.tls.version.min", 3);


// Enable TLS Delegated Credentials:
user_pref("security.tls.enable_delegated_credentials", true);


// OCSP Fetching:
user_pref("security.OCSP.enabled", 0);
user_pref("security.OCSP.require", false);
user_pref("privacy.partition.network_state.ocsp_cache", false);


// Enable HTTPS-Only Mode in All Windows:
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);


// Disable HTTP Background Requests:
user_pref("dom.security.https_only_mode_send_http_background_request", false);


// Display Advanced Information on Insecure Connection Warning Pages:
user_pref("browser.xul.error_pages.expert_bad_cert", true);


// Enable Strict Pinning (PKP (Public Key Pinning)):
user_pref("security.cert_pinning.enforcement_level", 2);


// Enable CRLite:
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);




/*********** User Interface ***********/


// Block Popup Windows:
user_pref("dom.disable_open_during_load", true);


// Limit Events That Can Cause a Popup:
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");


// Disable Pocket Extension:
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.api", "");


// Disable Screenshots Extension:
user_pref("extensions.screenshots.disabled", true);


// Disable PDFJS Scripting:
user_pref("pdfjs.enableScripting", false);
user_pref("pdfjs.enabledCache.state", false);


// Enable Containers and Show the UI Settings:
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

// Other Container Settings:
user_pref("privacy.userContext.longPressBehaviour", 2);


// Display Warning on the Padlock for "Broken Security":
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);


// Disable Hardware Perfomance Setting:
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);

// Disable Picture in Picture Controls:
user_pref("media.videocontrols.picture-in-picture.urlbar-button.enabled", false);




/************ Fonts ************/


// Disable Fonts:
user_pref("browser.display.use_document_fonts", 0);


// Limit Font Visibility (Windows, Mac, Some Linux):
user_pref("layout.css.font-visibility.private", 1);
user_pref("layout.css.font-visibility.standard", 1);
user_pref("layout.css.font-visibility.trackingprotection", 1);




/************ Headers / Referers ***********/


// Control When to Send a Referer:
user_pref("network.http.referer.XOriginPolicy", 2);


// Control Amount of Information to Send:
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);


// Other Referer / Header Settings:
user_pref("network.http.sendSecureXSiteReferer", false);
user_pref("network.http.referrer.spoofSource", true);




/************ Containers *************/


// Enable Container Tabs and it's UI Settings:
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);


// Set Behaviour On "+ Tab" to Display Container Menu on Left Click:
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);




/************ Plugins / Media / WebRTC / WebGL ************/


// Disable WebRTC:
user_pref("media.peerconnection.enabled", false);


// Force WebRTC Inside the Proxy:
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);


// Force a Single Network Interface for ICE Candidates Generation:
user_pref("media.peerconnection.ice.default_address_only", true);


// Force Exclusion of Private IP's from ICE Candidates:
user_pref("media.peerconnection.ice.no_host", true);


// Disable Gecko Media Plugins:
user_pref("media.gmp-provider.enabled", false);


// Disable Widevine CDM (Content Decryption Module):
user_pref("media.gmp-widevinecdm.enabled", false);


// Disable All DRM Content (EME: Encryption Media Extension):
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);


// Disable WebGL (Web Graphics Library):
user_pref("webgl.disabled", true);


// Disable Autoplay of HTML5 Media (Exceptions Under Site Permissions):
user_pref("media.autoplay.default", 5);




/*********** DOM (Document Object Model) ***********/


// Prevent Scripts from Moving and Resizing Open Windows:
user_pref("dom.disable_window_move_resize", true);


// Disable DOM Storage:			(May Break Things)
user_pref("dom.storage.enabled", false);		




/************* Downloads ************/


// Always Ask Where to Save Files:
user_pref("browser.download.useDownloadDir", false);


// Disable Downloads Panel Opening on Every Download:
user_pref("browser.download.alwaysOpenPanel", false);


// Disable Adding Downloads to the System's "Recent Documents" List:
user_pref("browser.download.manager.addToRecentDocs", false);


// Ask How to Handle Mimetypes:
user_pref("browser.download.always_ask_before_handling_new_types", true);




/************ Extensions ***********/


// Lock Down Allowed Extensions Directories:
user_pref("extensions.enabledScopes", 5);		// Hidden
user_pref("extensions.autoDisableScopes", 15);
user_pref("extensions.webextensions.restrictedDomains", "");


// Always Display the Installation Prompt:
user_pref("extensions.postDownloadThirdPartyPrompt", false);


// Disable Webextension Restrictions on Certain Mozilla Domains:
user_pref("extensions.webextensions.restrictedDomains", "");




//************ Enhanced Tracking Protection & Cookies **************/


// Enable ETP Strict Mode:
user_pref("browser.contentblocking.category", "strict");


// Disable ETP Web Compat Features:
user_pref("privacy.antitracking.enableWebcompat", false);


// Enable State Partitioning of Service Workers:
user_pref("privacy.partition.serviceWorkers", true);


// Enable APS (Always Partitioning Storage):
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false);


// Enable Tracking Protection:
user_pref("privacy.trackingprotection.enabled", true);


// Enable FPI (First Party Isolate):
user_pref("privacy.firstparty.isolate", true);


// Cookie Behaviour:			(1 = Reject all Third-Party)	(4 = Cookie Jar) 
user_pref("network.cookie.cookiebehaviour", 1);


// Disable Session Cookies:
user_pref("network.cookie.alwaysAcceptSessionCookies", false);


// Remove Tracking Identifiers From URL's:
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);


// Extra Tracking Protection:
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.socialtracking.block_cookies.enabled", true);
user_pref("privacy.trackingprotection.emailtracking.enabled", true);




/************ Shutdown & Sanitizing ************/


// Clear History and Other Items When Firefox Closes:
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.sitesettings", true);
user_pref("privacy.sanitize.timeSpan", 0);




/************* Resist Fingerprinting & Other Security ************/


// Enable Resist Fingerprinting:
user_pref("privacy.resistFingerprinting", true);


// Spoof Language Values:
user_pref("privacy.spoof_english", 2);


// Set New Window Size:
user_pref("privacy.window.maxInnerWidth", 1000);
user_pref("privacy.window.maxInnerHeight", 1000);


// Disable mozAddonManager Web API:
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);	// Hidden


// Disable Using System Colours:
user_pref("browser.display.use_system_colors", false); 


// Enforce Non-Native Widget Theme:
user_pref("widget.non-native-theme.enabled", true);


// Prevent Copy/Paste Notifications:
user_pref("dom.event.clipboardevents.enabled", false);


// Block Camera and Mic Status:
user_pref("media.navigator.enabled", false);


// Disable Website Viewing Battery:
user_pref("dom.battery.enabled", false);


// Don't Allow Websites to Prevent Right-Click:
user_pref("dom.event.contextmenu.enabled", false);


// Disable Website Reading Installed Plugins:
user_pref("plugins.enumerable_names", "");


// Prevent Firefox from Calling Home:
user_pref("browser.selfsupport.url", "");
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.startup.homepage_override.mstone", );
user_pref("browser.startup.homepage_override.buildID", "");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");


// Disable Websocket:
user_pref("network.websocket.enabled", false);


// (Javascript) Disable Just-In-Time (JTI) Compiler: 	(May Break Things)
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.wasm_baselinejit", false);
user_pref("javascript.options.ion", false);


// Send Do-Not-Track Request:
user_pref("privacy.donottrackheader.enabled", true);


// Remove Tracking Identifiers from URLS:
user_pref("privacy.query_stripping.enabled", true);


// Enable Private Browsing Auto-Start:
user_pref("browser.privatebrowsing.autostart", true);




/*********** Misc ************/


// Prevent Accessibility Services from Accessing Browser:
user_pref("accessibility.force_disabled", 1);


// Remove Temp Files Opened With an External Application:
user_pref("browser.helperApps.deleteTempFileOnExit", true);


// Disable UITour Backend:
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");


// Disable Permissions Delegation:
user_pref("permissions.delegation.enabled", false);


// (Sandbox) Enable Site Isolation:
user_pref("fission.autostart", true);

// Enable Hardware Acceleration
user_pref("gfx.direct2d.force-enabled", false);

// Lower Process Count
user_pref("dom.ipc.processCount", 2);




/************ Remove URL's Linking to Firefox Servers ************/

user_pref("app.feedback.baseURL", "");
user_pref("app.normandy.shieldLearnMoreUrl", "");
user_pref("app.releaseNotesURL", "");
user_pref("app.releaseNotesURL.aboutDialog", "");
user_pref("app.support.baseURL", "");
user_pref("app.update.url.details", "");
user_pref("app.update.url.manual", "");
user_pref("browser.chrome.errorReporter.infoURL", "");
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.endpoint_url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.mobile-android.url", "");
user_pref("browser.contentblocking.report.mobile-ios.url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.report.vpn-android.url", "");
user_pref("browser.contentblocking.report.vpn-ios.url", "");
user_pref("browser.contentblocking.report.vpn-promo.url", "");
user_pref("browser.contentblocking.report.vpn.url" , "");
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.dictionaries.download.url", "");
user_pref("browser.geolocation.warning.infoURL", "");
user_pref("browser.hiddenWindowChromeURL", "");
user_pref("browser.partnerlink.attributionURL", "");
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("browser.search.searchEnginesURL", "");
user_pref("browser.shell.defaultBrowserAgent.thanksURL", "");
user_pref("browser.urlbar.merino.endpointURL", "");
user_pref("browser.xr.warning.infoURL", "");
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.policy.firstRunURL", "");
user_pref("devtools.remote.adb.extensionURL", "");
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.push.serverURL", "");
user_pref("extensions.abuseReport.amoDetailsURL", "");
user_pref("extensions.abuseReport.url", "");
user_pref("extensions.blocklist.addonItemURL", "");
user_pref("extensions.blocklist.detailsURL", "");
user_pref("extensions.blocklist.itemURL", "");
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.getAddons.get.url", "");
user_pref("extensions.getAddons.langpacks.url", "");
user_pref("extensions.recommendations.privacyPolicyUrl", "");
user_pref("extensions.recommendations.themeRecommendationUrl", "");
user_pref("extensions.systemAddon.update.url", "");
user_pref("extensions.update.background.url", "");
user_pref("extensions.update.url", "");
user_pref("identity.sendtabpromo.url", "");
user_pref("lightweightThemes.getMoreURL", "");
user_pref("media.gmp-manager.url", "");
user_pref("signon.firefoxRelay.learn_more_url", "");
user_pref("signon.firefoxRelay.privacy_policy_url", "");
user_pref("signon.firefoxRelay.terms_of_service_url", "");
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("toolkit.datacollection.infoURL", "");
user_pref("urlclassifier.disallow_completions", "");


/***************************************************************************************************************/
