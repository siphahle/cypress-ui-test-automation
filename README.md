
# Cypress UI Automation Assessment

- This Repository Automates the Ultimate QA UI Website.

### It covers the following pages:
- Login automation
- Fill out forms and 
- Fake Pricing Page

### Intructions on How to Execute the Test suite on different Operating Systems (OS)

#### Windows:
- Download and Install Node JS
- Download and Install Visual Studio Code
- Clone the Project  to your machine(git clone https://github.com/siphahle/voss-ui-test-automation-assessment.git)
- Open the project in your visual Studio
- Open Visual Studio Terminal
- Execute this command (npm install cypress --save-dev)
- Execute npx cypress open
- On the Cypress Window select E2E Testing
- Select a browser of your choice eg Chrome
- Click on Specs
- Select a Spec to run.
- Tests will start running.

#### IOS
- Download and Install Node JS
- Download and Install Visual Studio Code
- Clone the Project  to your machine(git clone https://github.com/siphahle/voss-ui-test-automation-assessment.git)
- Open the project in your visual Studio
- Open Visual Studio Terminal
- Execute this command (npm install cypress --save-dev)
- Execute npx cypress open
- On the Cypress Window select E2E Testing
- Select a browser of your choice eg Chrome
- Click on Specs
- Select a Spec to run.
- Tests will start running.
#### Linux

##### Linux Prerequisists
- Before installling cypress might need to run these commands
- On Ubuntu/Debian (apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb)
- For Ubuntu 24.04 use the following command(apt-get install libgtk2.0-0t64 libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb)
- Arch (pacman -S gtk2 gtk3 alsa-lib xorg-server-xvfb libxss nss libnotify)
- CentOS(yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib)
- Amazon Linux 2023(dnf install -y xorg-x11-server-Xvfb gtk3-devel nss alsa-lib)

- Open a terminal.
- Use the distribution ton install Node js(sudo apt update,sudo apt install nodejs npm)
- Download and Install Visual Studio Code
- Clone the Project  to your machine(git clone https://github.com/siphahle/voss-ui-test-automation-assessment.git)
- Open the project in your visual Studio.
- Run this command npm install --save-dev cypress.
- Verify the version by running this command npx cypress -v
- Execute npx cypress open
- On the Cypress Window select E2E Testing
- Select a browser of your choice eg Chrome
- Click on Specs
- Select a Spec to run.
- Tests will start running.
