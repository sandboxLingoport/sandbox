# Sandbox

## Welcome
Welcome to the Lingoport Sandbox. Use the sandbox to get a feel for Lingoport's
Globalyzer. You may commit Java, JavaScript or C# code under the relevant
folder. Once the code has been pushed to the repository, it will be
automatically scanned by Globalyzer. Within a couple of minutes, the results
will be shown on the sandbox dashboard at [sandbox.lingoport.com](http://sandbox.lingoport.com/dashboard/index?id=Lingoport.Sandbox%3Ascan).

## In this Sandbox:

+ Add or modify C# (.cs), Javascript (.js, .html) and Java (.java) files: The Dashboard will reflect any new i18n issues.
+ Add or modify resource bundles.
  + Use filename\_en\_US.(json/properties/resx) for the base files.
+ Watch as updates to en\_US files are automatically added to fr\_FR, de\_DE, ja\_JP, and zh\_CN resource files then sent for translation.
  + So for example: Update messages\_en\_US.properties and watch as other message\_ files, such as messages\_ja\_JP.properties, are updated. Or errors\_en\_US.resx and errors\_de\_DE.resx, etc.
  + Translation updates will occur every 8 hours.

## Usage

1. Clone the repository.
   * $ git clone https://github.com/sandboxLingoport/sandbox.git
2. Checkout the working branch.
   * $ git checkout working
3. Add Java, JavaScript and/or C# code under the relevant directory.
4. Commit and push you changes.
   * $ git add &lt;changed files here&gt;
   * $ git commit
   * $ git push origin working

Within a couple of minutes, the Lingoport Sandbox
[Dashboard](http://sandbox.lingoport.com/dashboard/index?id=Lingoport.Sandbox%3Ascan) will update to include a scan of your changes.

Updates you make to English resource files will be automatically translated within 8 hours. You can see the translation status in the dashboard [here](http://sandbox.lingoport.com/dashboard/index?id=Lingoport.Sandbox:scan&did=6)

## Notes

The 'working' branch will be reset on a weekly basis.
