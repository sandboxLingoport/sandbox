# Sandbox Readme

## Welcome
Welcome to the Lingoport Sandbox. Use the sandbox to get a feel for Lingoport
Globalyzer results on the Lingoport Dashboard.

### Viewing example issues
To view i18n issues in current, sample code, visit the Lingoport Dashboard at [sandbox.lingoport.com](http://sandbox.lingoport.com/dashboard?id=Lingoport.Sandbox%3Ascan&did=1). The left side of the Dashboard shows Globalyzer i18n results. The right side shows Lingoport Resource Manager (LRM) translation status. Feel free to explore the Dashboard and click on anything of interest. If you get lost, click on the green logo in the upper left hand corner. Then click on 'Lingoport.Sandbox'. 

On the left hand side (Globalyzer) you can click on the number next to issue types such as 'Concatenations' or 'Embedded Strings'. There you will then see examples of these issues. Double-click on the center of the red issue bars to view the actual source code with the specific issue highlighted.

### Making your own modifications
You may add to or modify the existing Java, JavaScript or C# code in this sample. Initially the scan results will not appear on the Dashboard but they will be available on GitHub. [Here](https://github.com/sandboxLingoport/sandbox/pull/17) is and example. Once your changes are accepted by a Lingoport Administrator, they will then appear on the Dashboard. 

To make your own changes, follow the instructions below. Lingoport recommends testing with up to two hundred lines of code in the Sandbox. If you add your own code, please use UI or other user facing elements, since that is where most internationalization issues are located.

## Instructions for making modifications

### Access
In order to make changes the the sandbox, you will need a GitHub account.
If you do not have a GitHub account, you may also contact Lingoport via
[this form](http://lingoport.com/pd/lingoport-suite-sandbox/#demo_form)
on our web page. Or email [support@lingoport.com](mailto:support@lingoport.com).
We will create a GitHub account for you.

### In this Sandbox:

+ Add or modify C# (.cs), Javascript (.js, .html) and Java (.java) files.
  + New issues will be displayed on any pull requests that you make.
  + As pull requests are merged, the issues will be included in the Lingoport Dashboard.
+ Add or modify resource bundles.
  + Use filename\_en\_US.(json/properties/resx) for the base files.
+ Watch as updates to en\_US files are automatically added to fr\_FR, de\_DE, ja\_JP, and zh\_CN resource files, then sent for translation.
  + So for example: Update messages\_en\_US.properties and watch as other message\_ files, such as messages\_ja\_JP.properties, are updated. Or errors\_en\_US.resx and errors\_de\_DE.resx, etc.
  + Translation updates will occur every 8 hours.

### Usage

#### Fork this repository on GitHub

Login to GitHub, or create an account if you do not yet have one.

Once logged in, visit this page (https://github.com/sandboxLingoport/sandbox).

Then click on the 'Fork' button on the top right. This will create a version of the Sandbox code for you to modify.

#### Making changes

You may make changes to the code directly through the GitHub web interface, or download the code to your computer and make changes there.

##### Make changes through the web interface
You can add code for Lingoport Suite analysis on GitHub's website. This is the simplest way.

1. Open the repository that you cloned.
2. Select the 'working' branch. You may either make changes within this branch, or fork a new branch from it. If you're not sure, just use the 'working' branch.
3. Browse to and open one of the existing files.
4. Look for a pencil-like icon at the top right of the file. This is the 'edit this file' icon. Click on it.
5. You may now make changes to the file.
6. Once you are done, scroll down to where the page says 'Commit changes'.
7. In the 'Commit changes' section, add a comment describing your change.
8. Click 'Commit changes'.


##### Clone the repository locally to make your changes
If you prefer, you may also download the code to your computer.

1. Clone the repository.
   * $ git clone https://github.com/\<your github username\>/sandbox.git
2. Checkout the working branch.
   * $ git checkout working
3. Add Java, JavaScript and/or C# code under the relevant directory.
4. Commit and push you changes.
   * $ git add &lt;changed files here&gt;
   * $ git commit
   * $ git push origin working

#### Create a pull request

1. Look for the 'New pull request' button on GitHub at the home of the project you forked.
2. After clicking 'New pull request', you'll have the option to select the branch and fork to merge.
    * base fork: Select sandboxLingoport/sandbox
    * head fork: Select \<your GitHub username\>/sandbox
    * base: Select 'working'
    * compare: Select the branch you have made changes to.
3. Click 'Create pull request' once it appears.
4. Type in a title and description for the pull request.
5. Click the 'Create pull request' button again.

Within a couple of minutes, any detected i18n issues will be noted in the pull request by Lingoport automation.

After Lingoport approves the pull request, the Lingoport Sandbox
[Dashboard](http://sandbox.lingoport.com/dashboard?id=Lingoport.Sandbox%3Ascan&did=1) will update to include a scan of your changes.

Updates you make to English resource files will be automatically translated within 8 hours. You can see the translation status in the dashboard [here](http://sandbox.lingoport.com/dashboard?id=Lingoport.Sandbox%3Ascan&did=6).

## Need Help?

Contact lingoport support at [support@lingoport.com](mailto:support@lingoport.com)

## Notes

The 'working' branch will be reset every two weeks.

## Additional information

For more information, view the following [sandbox videos](https://vimeo.com/132981221).
