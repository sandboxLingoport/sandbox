# sandbox

## Welcome
Welcome to the Lingoport Sandbox. Use the sandbox to get a feel for Lingoport's
Globalyzer. You may commit Java, JavaScript or C# code under the relevant
folder. Once the code has been pushed to the repository, it will be
automatically scanned by Globalyzer. Within a couple of minutes, the results
will be shown on the sandbox dashboard, at [sandbox.lingoport.com](http://sandbox.lingoport.com).

## In this Sandbox:

+ Add or modify C# (.cs), Javascript (.js, .html) and Java (.java) files: The Dashboard should reflect new i18n issues
+ Add or modify resource bundles with \_en\_US.(json/properties/resx) for the base files, and \_fr\_FR.(json/properties/resx) for the translated files.
* The tracked locales are: en\_US (the files to be translated), fr\_FR, de\_DE, ja\_JP, and zh\_CN.
  * So for example: messages\_en\_US.properties and messages\_ja\_JP.properties, etc. or errors\_en\_US.resx and errors\_de\_DE.resx, etc.

## Usage

1. Clone the repository
   * $ git clone https://github.com/sandboxLingoport/sandbox.git
2. Checkout the working branch
   * $ git checkout working
3. Add Java, JavaScript and/or C# code under the relevant directory.
4. Commit and push you changes
   * $ git add &lt;changed files here&gt;
   * $ git commit
   * $ git push origin working

Within a couple of minutes, the Lingoport Sandbox
[Dashboard](http://sandbox.lingoport.com) will update to include a scan of your changes.

## Notes

The 'working' branch will be reset on a weekly basis.
