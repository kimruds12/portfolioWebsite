// Comprehensive OJT & DTR Experience Data Store
// Each day in every week across June, July, August, and September is formatted as a
// single template literal with .trim().split('\n').map(...) for easy copy-pasting.

export const ojtMonthsData = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1ST MONTH: JUNE 2026
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'june',
    name: 'June 2026',
    experienceTitle: '1st Month OJT Experience',
    tabPosition: 'left',
    badge: '',
    description:
      'My OJT experience this month strengthened my technical troubleshooting skills through hands-on work with hardware, software, printer, and network issues. Resolving connectivity failures, restoring system functionality, and diagnosing device problems taught me to approach technical issues systematically and verify solutions before returning equipment to service.',
    weeks: [
      {
        id: 'week-3',
        name: 'Week 3',
        dateRange: 'June 22 to June 26',
        days: [
          {
            date: 'June 22',
            day: 'Monday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 22:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'June 23',
            day: 'Tuesday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 23:
            activities: `
Installed AutoCAD 2021 on an employee's computer to restore access to the required design software and allow the employee to continue working on design projects.
Assisted an employee with Dropbox account access by providing the required verification code to restore access to cloud storage.
Restored an employee's laptop to normal operation by restarting the device after identifying that a Windows update caused the system to freeze.
Improved scan quality for an employee by cleaning the scanner glass to remove black lines that appeared on scanned documents.
Assisted in releasing a replacement laptop charger to an employee, as instructed by the Site Internship Supervisor, to restore power to the borrowed device and allow continued use.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'June 24',
            day: 'Wednesday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 24:
            activities: `
Issued a temporary external keyboard to an employee, as instructed by the Site Internship Supervisor, to restore functionality for the employee's laptop with a faulty keyboard.
Assisted an employee by connecting the printer directly to the assigned computer to restore printing functionality.
Examined an employee's laptop, identified a damaged Enter key, and prepared the device for replacement.
Restored network connectivity on an employee's computer by replacing the network cable, configuring a static IP address, and verifying the LAN connection.
Reconnected an employee's computer to the company network to restore network connectivity.
Resolved an unresponsive Microsoft Excel application on an employee's computer by restarting and refreshing the system.
Restored an employee's internet connection by reconnecting the wireless dongle and refreshing the network connection.
Restored printer connectivity for an employee by restarting the printer and connecting it directly to the assigned computer.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'June 25',
            day: 'Thursday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 25:
            activities: `
Prepared a replacement laptop as instructed by the Site Internship Supervisor by reinstalling the operating system, configuring the required user account, verifying that the device was functioning properly, and ensuring that it was ready for deployment to an employee.
Released the prepared laptop to the employee after confirming that it was fully configured and free from issues.
Installed a 1 TB hard drive into an external storage enclosure by formatting the drive, scanning for bad sectors, and confirming that no errors were found before use.
Assisted two guests by connecting their devices to the company guest Wi-Fi network.
Assisted an employee with an account login issue by verifying the account status and informing the employee that the account was already signed in on another device.
Restored wireless printing for an employee by downloading the required printer setup driver and connecting the printer directly to the employee's laptop.
Improved print quality for an employee by performing multiple power cleaning cycles until the print output was clear.
Configured a laptop and two mobile phones for an employee by connecting the devices to the company employee Wi-Fi network.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'June 26',
            day: 'Friday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 26:
            activities: `
Assisted the Site Internship Supervisor in resolving a company-wide internet outage by restoring network connectivity and verifying internet access across different departments.
Verified network connections and tested internet speeds in each department to ensure a stable network after the outage.
Prepared the first replacement laptop as instructed by the Site Internship Supervisor by installing the required applications, configuring the device, verifying that it was functioning properly, and ensuring that it was ready for deployment to an employee.
Released the first replacement laptop to the employee after confirming that it was fully configured and ready for use.
Restored an employee's access to the Outlook email account by resetting the account password.
Restored Adobe Acrobat functionality on an employee's computer by reinstalling the application and updating the required firewall settings.
Crimped a network cable and tested the connection to ensure stable network connectivity before deployment.
Prepared the second replacement laptop as instructed by the Site Internship Supervisor by installing the required applications, checking the system, verifying that it was functioning properly, and confirming that it was ready for deployment to an employee.
Released the second replacement laptop to the employee after verifying that it was fully configured and free from issues.
Deployed a new desktop computer for an employee by completing the setup, verifying that it was functioning correctly, and assisting the employee during the initial testing.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-4',
        name: 'Week 4',
        dateRange: 'June 29 to June 30',
        days: [
          {
            date: 'June 29',
            day: 'Monday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 29:
            activities: `
Verified the condition of a laptop before employee clearance as part of my IT Support responsibilities. 
Restored printer functionality by clearing the print queue and verifying successful printing.
Resolved multiple printer connectivity issues by reconfiguring network connections and verifying successful printing. 
Connected guest devices to the company guest Wi-Fi network to restore internet access.
Installed and configured FileZilla with the required server settings and credentials.
Installed an 8 TB hard drive by replacing the faulty cable and verifying proper operation.
Resolved a laptop white screen issue by performing a forced restart.
Assisted an employee with Dropbox account access by providing the required login credentials.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'June 30',
            day: 'Tuesday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 30:
            activities: `
Assisted the Site Internship Supervisor in deploying and configuring new network printers for employees and verified successful printing.
Installed a compatible cable on an Orico external storage enclosure to enable file transfers.
Restored a desktop computer's network connection by installing a wireless dongle.
Verified that the required files had already been deleted before the computer was reformatted.
Evaluated a slow computer and confirmed that a replacement unit was being prepared for deployment. 
Released and set up a new monitor after verifying that it was functioning properly.
Restored an unresponsive Microsoft Excel application and recovered the unsaved file.
Improved printer output by refilling the black ink and performing power cleaning until the print quality was restored.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2ND MONTH: JULY 2026
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'july',
    name: 'July 2026',
    experienceTitle: '2nd Month OJT Experience',
    tabPosition: 'right',
    badge: 'MONTH 02',
    description:
      'My OJT experience this July strengthened my ability to handle complex technical issues involving network configuration, printer management, hardware maintenance, and Windows recovery. Through systematic testing, device optimization, and troubleshooting, I learned to identify underlying problems, apply appropriate solutions, and verify system reliability while providing dependable IT support to employees.',
    weeks: [
      {
        id: 'week-4',
        name: 'Week 4',
        dateRange: 'July 1 to July 3',
        days: [
          {
            date: 'July 1',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 1:
            activities: `
Installed and configured network printers for employees and verified successful printing. 
Assisted an employee with data entry by organizing the required files in Microsoft Excel.
Restored an employee's internet connection by replacing the wireless dongle and configuring the network settings.
Diagnosed and resolved an Orico external storage enclosure issue by replacing the required cable and verifying proper operation.
Resolved a Viber messaging issue by refreshing the network connection and verifying successful message delivery.
Activated a network wall port and restored network connectivity for an employee. 
Issued a temporary laptop while preparing a replacement unit with the required specifications.
Diagnosed and repaired a laptop that was not charging or responding by performing troubleshooting and verifying proper operation.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 2',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 2:
            activities: `
Configured an employee's personal laptop by setting up the company network, internet access, and printer connectivity.
Updated the LAN driver to restore internet connectivity and verified stable connectivity. 
Restored access to an Outlook email account by updating the password and verifying successful sign-in.
Restored access to a company website by clearing the web browser cookies and verifying successful access.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 3',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 3:
            activities: `
Restored an employee's internet connection by replacing the wireless dongle with a LAN cable.
Reconfigured printer settings by removing incorrect devices, reconnecting the correct printer, and verifying successful printing.
Improved printer performance by cleaning the ink tank, installing the required driver, and restoring print quality. 
Configured a printer for wireless printing by connecting it to the company Wi-Fi network and verifying successful printing.
Restored scanner functionality by configuring the printer software and verifying successful document scanning.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-5',
        name: 'Week 5',
        dateRange: 'July 6 to July 9',
        days: [
          {
            date: 'July 6',
            day: 'Monday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 6:
            activities: `
As an IT Support Help Desk intern, I restored scanner functionality by configuring the USB connection and verifying successful scanning. 
Restored an employee's internet connection by reconnecting the LAN cable and verifying stable network access.
Configured a network printer and verified successful printing.
Resolved a Microsoft Excel performance issue by installing Microsoft Office 2019.
Improved an employee's network connectivity by updating the network driver and verifying stable internet access. 
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 7',
            day: 'Tuesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 7:
            activities: `
Configured and tested new printer devices to restore printing for multiple employees.
Reconfigured printer connections by restarting the printer and removing and re-adding the correct printer device.
Assisted with remote support to restore FileZilla access.
Issued a replacement mouse and power cable after verifying that both devices were functioning properly. 
Prepared, checked, and released replacement laptops, as instructed by the Site Internship Supervisor, after verifying that each device was ready for employee use.
Restored an employee's internet connection by installing a wireless dongle.
Replaced a faulty power cable to restore normal computer operation.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 8',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 8:
            activities: `
Assisted with remote support to restore an employee's Wi-Fi connection.
Improved network connectivity by updating the network configuration and verifying stable connectivity. 
Configured a new network printer and verified successful printing.
Restored printer functionality by restarting the printer, reconfiguring the printer connection, and verifying successful printing.
Improved computer performance by cleaning temporary files and optimizing the system.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 9',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 9:
            activities: `
Verified printer connectivity and completed a successful print test.
Issued a replacement mouse to an employee after the original mouse was found to be faulty and scheduled for disposal.
Restored network connectivity by renewing the network settings and updating the DNS configuration.
Restored an employee's internet connection by checking the network status and refreshing the network connection. 
Issued a replacement laptop to an employee for temporary use, as instructed by the Site Internship Supervisor, while waiting for the assigned laptop.
Improved computer performance by upgrading the RAM and verifying stable system performance.
Prepared, checked, and released a new laptop, as instructed by the Site Internship Supervisor, by connecting it to the company network before deploying it to the employee.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-6',
        name: 'Week 6',
        dateRange: 'July 13 to July 17',
        days: [
          {
            date: 'July 13',
            day: 'Monday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 13:
            activities: `
Restored network connectivity by replacing a faulty wireless dongle, updating the router and DNS settings, and changing the network adapter settings to restore a stable internet connection.
Installed Microsoft Office and reinstalled Windows to restore normal system performance and required applications.
Restored a Windows startup issue by disabling the VMD controller and Secure Boot.
Connected a printer and a mobile phone to the company Wi-Fi network to restore network access and verify successful connectivity.
Diagnosed and replaced a faulty printer after completing troubleshooting and confirming that the original printer could not be repaired.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 14',
            day: 'Tuesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 14:
            activities: `
Configured email forwarding through cPanel to redirect company emails to the required email account.
Prepared, checked, and released replacement laptops, as instructed by the Site Internship Supervisor, after verifying that each device was ready for deployment or employee use.
Verified laptops for employee clearance by ensuring that each device was functioning properly.
Configured network and printer access by connecting devices to the company network and verifying successful printing.
Issued replacement IT assets, including a laptop charger, charger power cable, replacement laptop, and replacement mouse, to restore normal device functionality.
Performed hardware maintenance by cleaning a system unit, reseating the RAM, and reconnecting the display cable to restore normal operation.
Completed the required gate pass request for an IT asset through the company gate pass system.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 15',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 15:
            activities: `
Prepared laptops for disposal by inspecting each device, removing the SSD and RAM, and organizing the units for proper disposal.
Restored a laptop that would not power on by performing a hard reset.
Improved network connectivity by checking the network settings, updating the network configuration, and verifying stable internet access.
Restored access to Wi-Fi on a laptop and mobile phone by reconnecting both devices and installing the required driver on the laptop.
Updated the audio driver and restored speaker functionality by restarting the laptop and verifying the sound output.
Prepared, checked, and released three replacement laptops, as instructed by the Site Internship Supervisor, after verifying that each device was ready for deployment to employees.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 16',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 16:
            activities: `
Configured a printer connection and set it as the default printer to restore printing.
Reinstalled Windows to restore a computer that repeatedly restarted.
Restored SketchUp access by activating the required Smart App Control setting.
Restored internet access by refreshing the Wi-Fi connection and restarting the Viber application.
Disabled the laptop touchpad after confirming the user's request.
Issued a replacement laptop, as instructed by the Site Internship Supervisor, after verifying that it was ready for employee use.
Inspected printers for disposal by identifying faulty units and documenting their FA numbers.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 17',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 17:
            activities: `
Configured a printer connection through the host computer to restore printing.
Connected a computer to the NAS to restore file access.
Reconfigured a printer connection by changing the main printer to a USB connection and setting the client computer to Private network.
Improved printer performance by performing a print head cleaning and nozzle check.
Issued a replacement mouse after the original mouse became faulty.
Performed hardware troubleshooting on a printer with no power by cleaning the sensor, ink system, internal board, and ink container to determine whether the printer could still be repaired.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-7',
        name: 'Week 7',
        dateRange: 'July 20 to July 24',
        days: [
          {
            date: 'July 20',
            day: 'Monday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 20:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 21',
            day: 'Tuesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 21:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 22',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 22:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 23',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 23:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 24',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 24:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-8',
        name: 'Week 8',
        dateRange: 'July 27 to July 30',
        days: [
          {
            date: 'July 27',
            day: 'Monday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 27:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 28',
            day: 'Tuesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 28:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 29',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 29:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 30',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 30:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3RD MONTH: AUGUST 2026
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'august',
    name: 'August 2026',
    experienceTitle: '3rd Month OJT Experience',
    tabPosition: 'left',
    badge: 'MONTH 03',
    description:
      'My August OJT experience strengthened my ability to adapt to diverse IT challenges involving network security settings, printer configuration, hardware maintenance, and software troubleshooting. Through preparing equipment for deployment, restoring system functionality, and supporting employees with technical needs, I developed greater attention to detail and a stronger commitment to delivering reliable IT services.',
    weeks: [
      {
        id: 'week-9',
        name: 'Week 9',
        dateRange: 'August 4 to August 7',
        days: [
          {
            date: 'August 4',
            day: 'Tuesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 4:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 7',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 7:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-10',
        name: 'Week 10',
        dateRange: 'August 10 to August 14',
        days: [
          {
            date: 'August 10',
            day: 'Monday',
            hours: '4 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 10:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 11',
            day: 'Tuesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 11:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 13',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 13:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 14',
            day: 'Friday',
            hours: '4 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 14:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-11',
        name: 'Week 11',
        dateRange: 'August 18 to August 20',
        days: [
          {
            date: 'August 18',
            day: 'Tuesday',
            hours: '10 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 18:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 20',
            day: 'Thursday',
            hours: '10 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 20:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-12',
        name: 'Week 12',
        dateRange: 'August 24 to August 28',
        days: [
          {
            date: 'August 24',
            day: 'Monday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 24:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 26',
            day: 'Wednesday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 26:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 27',
            day: 'Thursday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 27:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 28',
            day: 'Friday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 28:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4TH MONTH: SEPTEMBER 2026
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'september',
    name: 'September 2026',
    experienceTitle: '4th Month OJT Experience',
    tabPosition: 'right',
    badge: 'MONTH 04',
    description:
      'My last month of OJT experience allowed me to strengthen and apply the technical skills I had developed through previous months of hands-on IT support. By handling complex troubleshooting, hardware upgrades, system recovery, and network configuration, I gained greater confidence in applying my knowledge, solving technical problems independently, and delivering reliable IT solutions.',
    weeks: [
      {
        id: 'week-13',
        name: 'Week 13',
        dateRange: 'September 1 to September 4',
        days: [
          {
            date: 'September 1',
            day: 'Tuesday',
            hours: '5 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 1:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 2',
            day: 'Wednesday',
            hours: '10 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 2:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 3',
            day: 'Thursday',
            hours: '10 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 3:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 4',
            day: 'Friday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 4:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-14',
        name: 'Week 14',
        dateRange: 'September 8 to September 11',
        days: [
          {
            date: 'September 8',
            day: 'Tuesday',
            hours: '5 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 8:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 9',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 9:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 10',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 10:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 11',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 11:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-15',
        name: 'Week 15',
        dateRange: 'September 15 to September 18',
        days: [
          {
            date: 'September 15',
            day: 'Tuesday',
            hours: '5 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 15:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 16',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 16:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 17',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 17:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 18',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 18:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-16',
        name: 'Week 16',
        dateRange: 'September 22 to September 25',
        days: [
          {
            date: 'September 22',
            day: 'Tuesday',
            hours: '5 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 22:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 23',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 23:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 24',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 24:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 25',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 25:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
      {
        id: 'week-17',
        name: 'Week 17',
        dateRange: 'September 29',
        days: [
          {
            date: 'September 29',
            day: 'Tuesday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 29:
            activities: `
Prepared and checked a replacement laptop to ensure it was working properly and ready for deployment to an employee of 11FTC Enterprises, Inc.
Released the laptop after confirming it was fully configured and working properly.
Fixed Adobe Acrobat file associations and removed conflicting software.
Restored Microsoft Office default application settings on an employee's computer.
Configured access to the required design application using the appropriate login credentials.
Set up an email account using POP settings to restore email access.
Reconfigured a printer and updated the required Windows credentials.
Restored network access by reconnecting the network cable and verifying a successful DHCP connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
        ],
      },
    ],
  },
];

// Data utility helpers
export const getAllOjtMonths = () => ojtMonthsData;

export const getOjtMonthBySlug = (monthSlug) => {
  if (!monthSlug) return null;
  return ojtMonthsData.find((m) => m.id.toLowerCase() === monthSlug.toLowerCase()) || null;
};

export const getOjtWeekBySlug = (monthSlug, weekSlug) => {
  const month = getOjtMonthBySlug(monthSlug);
  if (!month) return null;
  const week = month.weeks.find((w) => w.id.toLowerCase() === weekSlug.toLowerCase()) || null;
  return { month, week };
};

// ─────────────────────────────────────────────────────────────────────────────
// 11FTC ENTERPRISES, INC. OVERVIEW SECTIONS (EDITABLE ACCORDION DATA)
// ─────────────────────────────────────────────────────────────────────────────
export const internshipOverviewSections = [
  {
    id: 'roles-responsibilities',
    tag: '01',
    title: 'Roles & Key Responsibilities',
    subtitle: 'CORE DUTIES & WORKSTATION ADMINISTRATION',
    description:
      'Served as an IT Technical Support Intern and Device Asset Custodian at 11FTC Enterprises, Inc., providing technical support, maintaining and deploying IT equipment, troubleshooting hardware, software, and network issues, and ensuring reliable workstation performance to minimize workplace disruptions and support daily business operations.',
    points: [
      'Resolved employee support tickets by troubleshooting hardware, software, printer, and network issues, restoring system functionality and minimizing workplace disruptions.',
      'Diagnosed and repaired hardware issues by inspecting components, replacing faulty parts, performing maintenance, and verifying proper device operation.',
      'Configured and maintained enterprise software, including Microsoft Office, Adobe applications, email clients, and specialized design tools, restoring access to required applications and improving workstation readiness.',
      'Configured and troubleshot network and USB printers by installing drivers, updating printer settings, managing host connections, and conducting print tests to restore printing and scanning services',
      'Restored network and internet connectivity by configuring network adapters, updating drivers, managing IP and DNS settings, and testing connections to maintain reliable access to company resources.',
    ],
  },
  {
    id: 'technologies-tools-systems',
    tag: '02',
    title: 'Technologies, Tools & Systems',
    subtitle: 'SOFTWARE, HARDWARE & NETWORK INFRASTRUCTURE',
    description:
      'Leveraged standard enterprise IT management tools, operating system utilities, network diagnostic suites, and application environments to deliver prompt technical support.',
    toolGroups: [
      {
        category: 'Hardware & Networking',
        items: [
          'PC Assembly',
          'Hardware Maintenance',
          'Laptop and Printer Troubleshooting',
          'LAN Cabling',
          'Peripheral Configuration',
        ],
      },
      {
        category: 'Operating Systems',
        items: [
          'Windows 10/11 Enterprise',
          'macOS',
        ],
      },
      {
        category: 'Design Software',
        items: [
          'Adobe Photoshop',
          'Adobe Illustrator',
          'Canva',
          'SketchUp',
        ],
      },
      {
        category: 'IT Systems & Infrastructure',
        items: [
          'Ticketing Management System',
          'Sophos Firewall',
          'FileZilla',
          'Network-Attached Storage (NAS)',
        ],
      },
    ],
    points: [
      'Hardware & Networking: PC Assembly, Hardware Maintenance, Laptop and Printer Troubleshooting, LAN Cabling, Peripheral Configuration',
      'Operating Systems: Windows 10/11 Enterprise, macOS',
      'Design Software: Adobe Photoshop, Adobe Illustrator, Canva, SketchUp',
      'IT Systems & Infrastructure: Ticketing Management System, Sophos Firewall, FileZilla, Network-Attached Storage (NAS)',
    ],
  },
  {
    id: 'skills-competencies',
    tag: '03',
    title: 'Skills & Competencies Developed',
    subtitle: 'PROFESSIONAL GROWTH & TECHNICAL CAPABILITIES',
    description:
      'Cultivated practical expertise in corporate IT infrastructure management, problem resolution workflows, and cross-functional user communication during the internship.',
    skills: [
      {
        title: 'Systematic Troubleshooting',
        description:
          'Enhanced ability to isolate root causes in software conflicts, OS configuration errors, and network disconnects efficiently.',
      },
      {
        title: 'Enterprise Deployment',
        description:
          'Mastered rapid workstation imaging, application provisioning, and standardized credential deployments.',
      },
      {
        title: 'Client Communication & Empathy',
        description:
          'Developed clear, patient communication when assisting non-technical personnel with software and hardware hurdles.',
      },
      {
        title: 'Accountability & Asset Custody',
        description:
          'Strengthened accuracy in auditing company assets, logging hardware turnover, and maintaining precise chain of custody records.',
      },
      {
        title: 'Professional Work Ethic',
        description:
          'Demonstrated consistent punctuality, detailed daily time recording (DTR), and proactive support in a fast-paced retail marketing solutions enterprise.',
      },
    ],
    points: [
      'Systematic Troubleshooting: Enhanced ability to isolate root causes in software conflicts, OS configuration errors, and network disconnects efficiently.',
      'Enterprise Deployment: Mastered rapid workstation imaging, application provisioning, and standardized credential deployments.',
      'Client Communication & Empathy: Developed clear, patient communication when assisting non-technical personnel with software and hardware hurdles.',
      'Accountability & Asset Custody: Strengthened accuracy in auditing company assets, logging hardware turnover, and maintaining precise chain of custody records.',
      'Professional Work Ethic: Demonstrated consistent punctuality, detailed daily time recording (DTR), and proactive support in a fast-paced retail marketing solutions enterprise.',
    ],
  },
];
