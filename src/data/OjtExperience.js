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
Diagnosed and repaired Windows startup issues by running SFC, DISM, and Check Disk, cleaning the laptop internally, and restoring normal system operation.
Configured printer connectivity by connecting the printer to the company network, defining the required Windows credentials, locating the correct network printer, and verifying successful printing through the host computer.
Provided user support by explaining the Google Sheets file import process and assisting with SketchUp account access through license verification and login guidance.
Issued a replacement mouse after the original mouse was found to be faulty.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 21',
            day: 'Tuesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 21:
            activities: `
Provided account support by assisting with SketchUp and Dropbox login credentials and verifying successful account access.
Configured printer connectivity by adding the required printer, setting it as the default printer, configuring the host printer connection, and verifying successful printing.
Configured employee computers to the company network by updating the required network settings and restoring internet access.
Optimized computer performance by adjusting application settings to reduce CPU usage and improve editing performance.
Issued a replacement mouse after the original mouse was found to be faulty.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 22',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 22:
            activities: `
Configured printer connectivity by updating the host IP address, restarting the Print Spooler, configuring Windows credentials, reconnecting the printer to the host computer, setting the correct default printer, and verifying successful printing.
Diagnosed and restored network connectivity by checking the network connection, replacing the wireless dongle when needed, restarting the access point, reconnecting employee devices, and verifying internet access through ping and speed tests.
Installed and configured a graphics card by installing the required driver and verifying that the device was functioning properly.
Replaced a faulty system unit and cleaned the internal components of a laptop to restore normal computer operation.
Restored Microsoft Office functionality by activating the required applications and verifying that they were working properly.
Diagnosed a slow laptop and verified that the device was functioning properly after testing.
Issued a keyboard and mouse after verifying that both devices were ready for use.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 23',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 23:
            activities: `
Configured printer connectivity by reconnecting the USB cable, setting the correct default printer, configuring the Brother printer, and verifying successful printing.
Restored network connectivity by replacing a faulty wireless dongle, updating the network settings, reconnecting employee devices, and verifying a stable internet connection.
Issued a replacement mouse after confirming that the original mouse and touchpad were no longer functioning.
Diagnosed a laptop startup issue by replacing the charger and restoring normal operation.
Installed Nitro PDF to restore access to the required application.
Corrected a laptop display issue by adjusting the power settings to prevent the screen from turning black.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 24',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 24:
            activities: `
Configured printer connections by connecting employee laptops to the printer, performing print tests, and troubleshooting different printer configurations and connection methods. Although the issue was not resolved, the troubleshooting process improved my understanding of printer configuration and will continue on the next working day.
Recovered the required files and safely transferred them to the employee's computer after verifying that the initial file transfer was completed.
Documented the access point (AP) port numbers and passwords to support the configuration and management of the company's managed network switches.
Issued a replacement mouse after the original mouse became faulty.
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
Configured and restored network connectivity by updating the Sophos Firewall settings, refreshing network drivers, reconnecting employee devices to the company network, and verifying stable internet access.
Configured printer connectivity by restarting the printer and Print Spooler service, reconnecting the printer, updating the printer IP address, and verifying successful printing.
Diagnosed and repaired hardware issues by crimping a loose network cable and restoring a system unit that had no display.
Optimized laptop performance by forcing a restart and improving system responsiveness to restore normal operation.
Verified and restored Google Calendar synchronization on a mobile device by checking the account settings and restarting the application.
Reconfigured a printer workstation by disabling the WSD port, changing the printer port and IP address, and restoring access to department print files.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 28',
            day: 'Tuesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 28:
            activities: `
Configured printer connectivity by reconnecting printers to the host computer, restarting the Print Spooler service when needed, installing the required printer driver, and verifying successful printing through print tests.
Diagnosed and repaired hardware issues by replacing a faulty keyboard, crimping a damaged network cable, and verifying that both devices were functioning properly.
Restored laptop display issues by replacing faulty hardware components and verifying normal display output.
Resolved a printer paper jam by removing the jammed paper and restoring normal printer operation.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 29',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 29:
            activities: `
Restored network connectivity by renewing the IP configuration, refreshing the DNS settings, restarting the computer, and troubleshooting an application-specific network issue.
Issued a replacement keyboard after the original keyboard became faulty.
Prepared, checked, and released a replacement laptop, as instructed by the Site Internship Supervisor, after verifying that it was ready for deployment to the employee.
Reset a laptop password through the Windows User Accounts settings to restore user access.
Optimized a laptop by ending unnecessary background tasks, reinstalling the required web browser, and restoring normal application performance.
Improved laptop performance by cleaning the internal cooling fan and upgrading the memory to restore stable system operation.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'July 30',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for July 30:
            activities: `
Configured printer connectivity by installing the required printer drivers, updating the printer IP address, removing and re-adding printer devices, restarting the Print Spooler service, clearing the print queue, and verifying successful printing through print tests.
Configured an Outlook email account by assigning the required email credentials and verifying successful account access.
Restored network connectivity by updating the network driver, removing incorrect proxy and Wi-Fi settings, reconnecting devices to the company network, and verifying a stable internet connection.
Restarted the Viber application to restore normal internet connectivity.
Diagnosed a printer maintenance issue by checking the printer settings and verifying normal printer operation.
Issued a replacement laptop for temporary use after the employee's assigned laptop was borrowed.
Improved printer performance by installing all required printer drivers and assigning a new IP address to increase printing speed
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
Installed Adobe Photoshop and Illustrator and added the required firewall rules for the applications.
Configured printer connections by connecting printers to the company network, adding Windows credentials, accessing the host computer, and verifying successful printing.
Repaired a faulty power supply by replacing the PSU and cleaning the CPU.
Configured BIOS settings to fix startup issues by setting up the BIOS and disabling Secure Boot.
Reconnected an offline printer by checking its Wi-Fi connection, refreshing Microsoft Word, and completing a test print.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 7',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 7:
            activities: `
Restored printer connectivity by restarting the printer and Print Spooler, updating the printer driver, and verifying successful printing.
Updated the printer firmware and performed a test print to correct the print output issue.
Signed in to the required Outlook account to restore email access.
Restored internet connectivity by renewing the IP settings, refreshing the network connection, and restarting the computer.
Reconnected a laptop to the company network by adding its MAC address and verified internet access through a speed test.
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
Configured printer connections by switching devices to the Enterprise network, adding printers by IP address, restarting the Print Spooler, installing the required Epson driver and scanner app, and completing print tests.
Improved slow printer output by changing the printer mode to Ink Saved Mode.
Connected a computer to the Enterprise network by adding its MAC address and verifying internet access.
Restored Viber access by reinstalling the application and checking message synchronization on the mobile phone.
Provided the required SketchUp login code to restore account access.
Provided an external keyboard after the laptop keyboard became difficult to use and helped address the need for an HDMI cable for an additional monitor.
Guided an employee with an iPhone issue by recommending browser access while the required office applications remained available.
Managed a Windows Check Disk issue by allowing the disk check to complete before planning to disable it after startup.
Bypassed an Excel popup using PowerShell to restore access to Windows and Microsoft applications.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 11',
            day: 'Tuesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 11:
            activities: `
Configured printer connections by connecting computers to the Enterprise network, adding printers by IP address, and completing test prints.
Replaced a faulty keyboard and verified that the new keyboard was working properly.
Reconnected a computer to the Enterprise network by removing the previous internet access and setting the Enterprise network as default.
Removed WPS Office to set the required default printing application.
Removed the existing Microsoft account from a computer and restarted the device to stop the account prompt.
Checked a computer's specifications and verified that the monitor matched the required specifications.
Cleaned the scanner glass to remove dirt and prevent lines from appearing on scanned documents.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 13',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 13:
            activities: `
Issued a good-condition mouse and verified that it was functioning properly.
Handled an Acumatica printing issue by waiting for the application to respond before reformatting.
Configured multiple Epson L5290Tooling printer connections by connecting laptops to the Enterprise network, adding the printers, and completing print tests.
Dried a water-damaged laptop with a blower before opening it and checked the fans and keyboard.
Installed a 512 GB SSD for additional storage.
Reconnected an offline printer by removing and adding the printer again.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 14',
            day: 'Friday',
            hours: '4 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 14:
            activities: `
Restored internet connectivity by restarting affected devices and testing the connection.
Retested multi-page printing to check the printer output.
Issued a 5-meter HDMI cable for temporary use.
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
Restored internet access by checking the IP address, updating it as needed, and verifying the connection.
Restored network access by disabling and updating the network adapter driver, then testing the connection.
Deployed a good-condition system unit and replaced the SSD before testing the device.
Issued new mice to employees and verified that each mouse was working properly.
Secured an SSD by reinstalling it and adding a screw to prevent movement, then tested the laptop for proper booting.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 20',
            day: 'Thursday',
            hours: '10 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 20:
            activities: `
Deployed a 1 TB NVMe external device for file backup.
Restored printer access by switching printers to the Enterprise Wi-Fi, re-adding offline printers, restarting the Print Spooler, and completing test prints.
Improved printing performance by restarting the laptop, reopening Excel, and testing the printer through Wi-Fi.
Improved internet performance by closing unnecessary background apps, refreshing the connection, and reconnecting devices to the Enterprise network.
Prepared a Lenovo laptop for deployment by adding it to the available laptop list and checking its physical keyboard.
Checked Sophos registration and subscription status through the Sophos Firewall.
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
Deployed good-condition laptops for apprentice use and checked available units for deployment.
Added a Lenovo laptop to the available list and checked it with a physical keyboard before use.
Issued good-condition mice and keyboards to employees after replacing faulty devices.
Replaced an external keyboard after troubleshooting unresponsive keys.
Fixed a laptop display issue by securing the power adapter.
Improved laptop performance by removing unneeded software and updating Windows.
Issued a 1 TB SSD-based charger replacement? Wait this is not in image — remove.
Connected devices to the guest Wi-Fi network and verified internet access.
Replaced a faulty laptop charger and verified proper charging.
Configured printer access by changing the default printer and testing the connection.
Cleared a printer paper jam and performed printer maintenance.
Improved computer performance by removing temporary files and enabling high-performance power settings.
Replaced a faulty monitor power adapter and restored normal display operation.
Fixed a Google account access issue by correcting the Sophos settings.
Troubleshooted laptop keyboard issues and replaced the external keyboard when the original keys remained faulty
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 26',
            day: 'Wednesday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 26:
            activities: `
Made more space on the laptop by transferring files from another account and deleting them from the laptop.
Repaired a LAN connection by re-crimping the RJ45 cable, testing all eight wires, and reconnecting the Wi-Fi dongle.
Fixed a printer ink issue by flushing and preparing the ink system.
Reconnected a laptop to a printer through Wi-Fi and added the printer device.
Removed foreign objects from a printer, cleaned its internal parts, and performed a head cleaning test.
Replaced a faulty mouse and issued a working keyboard, mouse, and monitor.
Improved a slow-booting PC by optimizing its system performance.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 27',
            day: 'Thursday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 27:
            activities: `
Configured multiple printers and completed test prints to restore printing access.
Fixed a printer error by cleaning the circular disk and testing the printer.
Added a network printer to a tablet using its IP address and verified printing.
Checked a laptop with screen flickering and monitor lines as part of hardware troubleshooting.
Disabled Secure Boot in the BIOS and tested the laptop.
Activated Microsoft software and enabled Windows Security access.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'August 28',
            day: 'Friday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for August 28:
            activities: `
Completed three invitation designs with the required information for proposal.
Deployed a good-condition laptop for employee use.
Audited the required logs and completed the remaining ongoing task.
Checked and verified the completed work to ensure everything was ready for use.
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
Removed the WPS add-in from Excel and verified that the prompt no longer appeared when opening files.
Prepared a good-condition speaker cable and tested it to ensure it was working properly.
Replaced the laptop thermal paste and cleaned the hardware parts.
Restored printer access by restarting the Print Spooler service and performing a test print.
Fixed another printer connection issue by updating the printer driver and completing a test print.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 2',
            day: 'Wednesday',
            hours: '10 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 2:
            activities: `
Provided the SketchUp login code and created the required email accounts.
Cleaned the printer's internal parts and circular disk and performed head cleaning to address the red blinking printer issue.
Uninstalled WPS software to remove the issue caused by the application.
Replaced the visionsetting.xml file using the backup copy and verified that the I-CUT software worked properly.
Enabled the touchpad and tested it to ensure it was functioning properly.
Prepared and configured a LAN connection by setting the required access point settings to allow the connection.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 3',
            day: 'Thursday',
            hours: '10 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 3:
            activities: `
Disabled Secure Boot in the BIOS and saved the changes to stop the BIOS prompt from appearing.
Installed a new SSD and verified that it was working properly.
Removed the online chat blocking policy to restore access to Web WhatsApp.
Replaced the VisionSetting.xml file with the backup copy in the MachineController folder and renamed the old file to restore I-CUT.
Logged in to SketchUp to restore account access.
Installed the Brother DCP-T420W printer driver and connected the printer to the Enterprise network.
Reconfigured host printer connections by changing the IP address to 192.168.3.7, restarting the Print Spooler, adding the required credentials, reconnecting the printers to the host PC, and performing test prints.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 4',
            day: 'Friday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 4:
            activities: `
Restored Viber internet access by ending the Viber process, connecting the device to the Enterprise network, and testing the application.
Used the remote connection to cast a device to a TV and tested whether casting worked properly.
Deployed a good-condition laptop for employee regular use.
Troubleshooting a printer connection issue by restarting the printer and Print Spooler, reconnecting it to the host PC, and performing a test print.
Restored monitor display by checking the connection and securing the HDMI cable before testing the display.
Updated the network adapter to the Microsoft driver, restarted Wi-Fi, connected the device to the Enterprise network, and performed a speed test.
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
Fixed a printer error by removing the connected ports, reconnecting the printer, and applying troubleshooting steps to clear the paper jam issue.
Removed unnecessary prefetch files by using remote access and entering the required administrator password.
Restored department-wide internet access by restarting the access point and performing a speed test.
Improved PC performance by clearing temporary files, restarting the computer, and disabling unnecessary startup applications.
Connected multiple laptops to the L5290TOOLING printer and performed test prints to verify printing access.
Connected a printer through the host computer using the required host connection and verified successful printing.
Reconnected a printer to the Enterprise network and linked it to the computer before performing a test print.
Activated Microsoft Office applications using the required PowerShell command and disabled updates afterward.
Improved laptop performance by turning off the energy saver setting.
Force-restarted a laptop to restore normal operation after the device became unresponsive.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 9',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 9:
            activities: `
Removed the OneNote printer and scanner, then installed the printer through the printer setup.
Cleared a printer paper jam by removing the stuck paper, restarting the printer, and performing a test print.
Reset the network connection using network commands and restarted the computer to restore internet access.
Tested another charger for an Acer laptop and verified that it was working properly.
Connected the computer to the 11FTC Enterprise network and tested printing.
Upgraded the computer's RAM by installing an additional 8 GB and testing the system.
Verified the account information to confirm that the listed Gmail account was not provided by the company.
Replaced the TV HDMI cable with a 5-meter cable.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 10',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 10:
            activities: `
Cleaned the internal parts of a PC and tested the device to verify proper operation.
Fixed a PC boot and frozen display issue after relocation by using Hiren's tools and BCDEdit, then testing the system outside Safe Mode.
Relocated a monitor and PC to the newly assigned workspace.
Deployed good-condition mice for laptop use and verified that they were working properly.
Optimized a slow PC by deleting temporary files and prefetch data and clearing the standby memory list using RAMMap.
Logged in to the required Jit.ph account using the POP account and completed the same account setup process used previously.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 11',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 11:
            activities: `
Borrowed a Smart Wi-Fi device to provide temporary internet access.
Activated the SketchUp license by adding the required account and accessing it remotely.
Replaced faulty speaker audio with a working audio component from another laptop.
Installed a new power supply to restore proper power to the PC.
Added 8 GB of RAM to provide more memory space.
Installed a 10-meter LAN cable to provide internet access to the PC.
Deployed a Smart Wi-Fi device for the warehouse dead spot with 65 GB of data and no expiration.
Installed a new 512 GB SSD to provide additional storage.
Force-restarted a laptop by holding the power button to restore operation.
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
Changed the primary boot device to the NVMe drive and tested the PC to verify that it could enter the operating system.
Restored printer access by restarting the laptop and connecting the printer through a USB cable.
Replaced an old laptop with a new laptop.
Connected an employee's computer to the printer and verified the connection.
Created a new email account.
Connected a computer to the printer and fixed the printing error in Excel.
Connected a computer to the tooling printer.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 16',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 16:
            activities: `
Repaired Viber by installing the Microsoft Visual C++ Redistributable for both x86 and x64 versions and restarting the computer.
Logged in to Outlook and reset the required account login.
Replaced the faulty Acer laptop charger with a good-condition charger and tested the charging function.
Reinstalled ArtCamPro by removing the faulty application and following the required installation steps from the provided folder.
Installed the required Adobe Illustrator extension by using the administrator password and a plug adapter for the laptop charger.
Disabled Secure Boot and tested the laptop to verify that it was working properly.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 17',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 17:
            activities: `
Troubleshoot a monitor display issue by reconnecting the monitor, restarting the system unit, and updating the graphics driver.
Restored scanner functionality by restarting the laptop and reconnecting the USB cable.
Assisted with printer access by connecting the printer in the IT office and verifying printing through the device driver.
Changed the network connection from static IP to DHCP to improve internet stability.
Reconnected the Epson machine printer by moving the USB cable to another port, restarting the machine and PC, and performing a test print.
Connected the printer to the Enterprise network and performed a test print to verify printing access.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 18',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 18:
            activities: `
Fixed a Viber error by uninstalling the application and removing its cached files.
Opened the required file in Sophos and advised the user about the access issue.
Checked an old Viber and PC file issue and advised the user about the file's age.
Reset a panel password to restore account access.
Assisted with an email handler issue for the required email account.
Replaced a faulty charger with an alternative charger and verified that it was charging.
Connected the printer to the Enterprise network and L5290Tooling then performed a test print.
Created a JIT email through cPanel using the same password.
Assisted with the Dropbox login code to restore account access.
Removed the old Adobe Illustrator 2024 version and replaced it with the 2021 version.
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
Checked the laptop and recommended replacing the fan and applying new thermal paste due to excessive fan noise. 
Activated Windows and Microsoft Office remotely using PowerShell. 
Prepared a crimped RJ45 LAN cable that was 12 feet long for the required machine. 
Accessed the computer remotely and removed Nitro Pro as requested.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 23',
            day: 'Wednesday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 23:
            activities: `
Cleaned the printer in strong cleaning mode and checked the nozzles to restore proper color printing. 
Reinstalled Adobe Illustrator 2020 after removing the 2021 version due to an error that caused the application to force close. 
Downloaded a printer resetter and reset the printer ink settings then performed a test print. ● Refreshed the Dropbox tab and tested it to verify that it was working properly. 
Saved the required files and removed WPS Office and 360 Security using Geek Uninstaller then restarted the computer and tested its performance.
Reformatted the system unit, added a functional power cable, and provided a VGA cable for the monitor. 
Set up a JIT email in Outlook Classic using POP and updated another JIT email account in Outlook.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 24',
            day: 'Thursday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 24:
            activities: `
Deactivated Viber and synced it using a QR scan from a mobile device to resolve the Viber error. 
Provided the SketchUp account login credentials as requested. 
Accessed the computer remotely through PowerShell and completed the Microsoft Office activation. 
Checked the internet connection remotely, closed and reopened Viber through Task Manager, restarted the computer, and verified that it was working. 
Deleted the requested entry from the Google Sheet. 
Ran a head cleaning cycle on the printer to improve print quality. 
Performed printer head cleaning and printed a test page to verify the print output. 
Replaced the damaged LCD with a working model laptop.
`.trim().split('\n').map(activity => activity.trim()),
          },
          {
            date: 'September 25',
            day: 'Friday',
            hours: '9 Hours',
            status: 'Completed',
            // Daily activities & tasks for September 25:
            activities: `
Upgraded the PC to 16 GB of RAM and downloaded AutoCAD for multitasking. 
Downloaded and installed the full Epson L3210 driver package, set the printer as default, and verified printing and scanning through a test. 
Deployed a working power adapter for the charger and verified that it was functioning properly.
Deployed a working laptop with an external keyboard and mouse to replace the damaged laptop screen. 
Changed the default printer in AnyDesk to resolve the error when saving files as PDF. 
Deployed a new laptop for the required user.
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
Connected the printer to the host computer through the assigned network connection and verified the setup.
Cleaned the RAM using an eraser to address the personal computer display issue.
Connected and set up a computer to Wi-Fi for network access.
Replaced the laptop charger to address the charging issue.
Set up the monitor and verified that it was ready for use.
Completed the remaining work for the 11FTC Enterprises ticketing management system, including its web page with the company’s mission and vision and information about the IT Team.
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
