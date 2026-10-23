// Comprehensive OJT & DTR Experience Data Store
// Defines monthly folders, weekly folders, daily dates, and activities.

// Default baseline activities list (used as fallback or baseline for individual days)
export const defaultReflectionActivities = [
  'Prepared a replacement laptop as instructed by the Site Internship Supervisor. Checked the device, verified that it was functioning properly, and ensured that it was ready for deployment to an employee of 11FTC Enterprises, Inc.',
  'Released the prepared laptop after confirming that it was fully configured and free from issues.',
  'Assisted an employee by fixing an issue where Adobe Acrobat files opened in the wrong application. Restored the correct file association and removed conflicting software.',
  'Restored the default application settings for Microsoft Office after resolving a software issue on an employee’s computer.',
  'Assisted an employee by configuring access to the required design application with the appropriate login credentials.',
  'Set up an email account using POP settings to restore email access.',
  'Reconfigured a printer by removing and adding the device again, then updating the required Windows credentials.',
  'Restored network access on an employee’s computer by reconnecting the network cable and confirming a successful DHCP connection.',
];

/**
 * Helper to construct an independent day entry with:
 * - Editable activities text (array of task strings)
 */
export const createDay = (date, day, hours = '8 Hours', status = 'Completed', customActivities = null) => ({
  date,
  day,
  hours,
  status,
  // Standalone editable activities array for this day:
  activities: customActivities ? [...customActivities] : [...defaultReflectionActivities],
});

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
    description: 'My OJT experience this month strengthened my technical troubleshooting skills through hands-on work with hardware, software, printer, and network issues. Resolving connectivity failures, restoring system functionality, and diagnosing device problems taught me to approach technical issues systematically and verify solutions before returning equipment to service.',
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
            activities: [
              'Prepared a replacement laptop as instructed by the Site Internship Supervisor. Checked the device, verified that it was functioning properly, and ensured that it was ready for deployment to an employee of 11FTC Enterprises, Inc.',
              'Released the prepared laptop after confirming that it was fully configured and free from issues.',
              'Assisted an employee by fixing an issue where Adobe Acrobat files opened in the wrong application. Restored the correct file association and removed conflicting software.',
              'Restored the default application settings for Microsoft Office after resolving a software issue on an employee’s computer.',
              'Assisted an employee by configuring access to the required design application with the appropriate login credentials.',
              'Set up an email account using POP settings to restore email access.',
              'Reconfigured a printer by removing and adding the device again, then updating the required Windows credentials.',
              'Restored network access on an employee’s computer by reconnecting the network cable and confirming a successful DHCP connection.',
            ],
          },
          {
            date: 'June 23',
            day: 'Tuesday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 23:
            activities: [
              'Prepared a replacement laptop as instructed by the Site Internship Supervisor. Checked the device, verified that it was functioning properly, and ensured that it was ready for deployment to an employee of 11FTC Enterprises, Inc.',
              'Released the prepared laptop after confirming that it was fully configured and free from issues.',
              'Assisted an employee by fixing an issue where Adobe Acrobat files opened in the wrong application. Restored the correct file association and removed conflicting software.',
              'Restored the default application settings for Microsoft Office after resolving a software issue on an employee’s computer.',
              'Assisted an employee by configuring access to the required design application with the appropriate login credentials.',
              'Set up an email account using POP settings to restore email access.',
              'Reconfigured a printer by removing and adding the device again, then updating the required Windows credentials.',
              'Restored network access on an employee’s computer by reconnecting the network cable and confirming a successful DHCP connection.',
            ],
          },
          {
            date: 'June 24',
            day: 'Wednesday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 24:
            activities: [
              'Prepared a replacement laptop as instructed by the Site Internship Supervisor. Checked the device, verified that it was functioning properly, and ensured that it was ready for deployment to an employee of 11FTC Enterprises, Inc.',
              'Released the prepared laptop after confirming that it was fully configured and free from issues.',
              'Assisted an employee by fixing an issue where Adobe Acrobat files opened in the wrong application. Restored the correct file association and removed conflicting software.',
              'Restored the default application settings for Microsoft Office after resolving a software issue on an employee’s computer.',
              'Assisted an employee by configuring access to the required design application with the appropriate login credentials.',
              'Set up an email account using POP settings to restore email access.',
              'Reconfigured a printer by removing and adding the device again, then updating the required Windows credentials.',
              'Restored network access on an employee’s computer by reconnecting the network cable and confirming a successful DHCP connection.',
            ],
          },
          {
            date: 'June 25',
            day: 'Thursday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 25:
            activities: [
              'Prepared a replacement laptop as instructed by the Site Internship Supervisor. Checked the device, verified that it was functioning properly, and ensured that it was ready for deployment to an employee of 11FTC Enterprises, Inc.',
              'Released the prepared laptop after confirming that it was fully configured and free from issues.',
              'Assisted an employee by fixing an issue where Adobe Acrobat files opened in the wrong application. Restored the correct file association and removed conflicting software.',
              'Restored the default application settings for Microsoft Office after resolving a software issue on an employee’s computer.',
              'Assisted an employee by configuring access to the required design application with the appropriate login credentials.',
              'Set up an email account using POP settings to restore email access.',
              'Reconfigured a printer by removing and adding the device again, then updating the required Windows credentials.',
              'Restored network access on an employee’s computer by reconnecting the network cable and confirming a successful DHCP connection.',
            ],
          },
          {
            date: 'June 26',
            day: 'Friday',
            hours: '8 Hours',
            status: 'Completed',
            // Daily activities & tasks for June 26:
            activities: [
              'Prepared a replacement laptop as instructed by the Site Internship Supervisor. Checked the device, verified that it was functioning properly, and ensured that it was ready for deployment to an employee of 11FTC Enterprises, Inc.',
              'Released the prepared laptop after confirming that it was fully configured and free from issues.',
              'Assisted an employee by fixing an issue where Adobe Acrobat files opened in the wrong application. Restored the correct file association and removed conflicting software.',
              'Restored the default application settings for Microsoft Office after resolving a software issue on an employee’s computer.',
              'Assisted an employee by configuring access to the required design application with the appropriate login credentials.',
              'Set up an email account using POP settings to restore email access.',
              'Reconfigured a printer by removing and adding the device again, then updating the required Windows credentials.',
              'Restored network access on an employee’s computer by reconnecting the network cable and confirming a successful DHCP connection.',
            ],
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
            activities: [
              'Prepared a replacement laptop as instructed by the Site Internship Supervisor. Checked the device, verified that it was functioning properly, and ensured that it was ready for deployment to an employee of 11FTC Enterprises, Inc.',
              'Released the prepared laptop after confirming that it was fully configured and free from issues.',
              'Assisted an employee by fixing an issue where Adobe Acrobat files opened in the wrong application. Restored the correct file association and removed conflicting software.',
              'Restored the default application settings for Microsoft Office after resolving a software issue on an employee’s computer.',
              'Assisted an employee by configuring access to the required design application with the appropriate login credentials.',
              'Set up an email account using POP settings to restore email access.',
              'Reconfigured a printer by removing and adding the device again, then updating the required Windows credentials.',
              'Restored network access on an employee’s computer by reconnecting the network cable and confirming a successful DHCP connection.',
            ],
          },
          {
            date: 'June 30',
            day: 'Tuesday',
            hours: '8 Hours',
            status: 'Completed',
            activities: [
              'Prepared a replacement laptop as instructed by the Site Internship Supervisor. Checked the device, verified that it was functioning properly, and ensured that it was ready for deployment to an employee of 11FTC Enterprises, Inc.',
              'Released the prepared laptop after confirming that it was fully configured and free from issues.',
              'Assisted an employee by fixing an issue where Adobe Acrobat files opened in the wrong application. Restored the correct file association and removed conflicting software.',
              'Restored the default application settings for Microsoft Office after resolving a software issue on an employee’s computer.',
              'Assisted an employee by configuring access to the required design application with the appropriate login credentials.',
              'Set up an email account using POP settings to restore email access.',
              'Reconfigured a printer by removing and adding the device again, then updating the required Windows credentials.',
              'Restored network access on an employee’s computer by reconnecting the network cable and confirming a successful DHCP connection.',
            ],
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
    description: 'My OJT experience this July strengthened my ability to handle complex technical issues involving network configuration, printer management, hardware maintenance, and Windows recovery. Through systematic testing, device optimization, and troubleshooting, I learned to identify underlying problems, apply appropriate solutions, and verify system reliability while providing dependable IT support to employees.',
    weeks: [
      {
        id: 'week-4',
        name: 'Week 4',
        dateRange: 'July 1 to July 3',
        days: [
          createDay('July 1', 'Wednesday', '9 Hours', 'Completed'),
          createDay('July 2', 'Thursday', '9 Hours', 'Completed'),
          createDay('July 3', 'Friday', '9 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-5',
        name: 'Week 5',
        dateRange: 'July 6 to July 9',
        days: [
          createDay('July 6', 'Monday', '9 Hours', 'Completed'),
          createDay('July 7', 'Tuesday', '9 Hours', 'Completed'),
          createDay('July 8', 'Wednesday', '9 Hours', 'Completed'),
          createDay('July 9', 'Thursday', '9 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-6',
        name: 'Week 6',
        dateRange: 'July 13 to July 17',
        days: [
          createDay('July 13', 'Monday', '9 Hours', 'Completed'),
          createDay('July 14', 'Tuesday', '9 Hours', 'Completed'),
          createDay('July 15', 'Wednesday', '9 Hours', 'Completed'),
          createDay('July 16', 'Thursday', '9 Hours', 'Completed'),
          createDay('July 17', 'Friday', '9 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-7',
        name: 'Week 7',
        dateRange: 'July 20 to July 24',
        days: [
          createDay('July 20', 'Monday', '9 Hours', 'Completed'),
          createDay('July 21', 'Tuesday', '9 Hours', 'Completed'),
          createDay('July 22', 'Wednesday', '9 Hours', 'Completed'),
          createDay('July 23', 'Thursday', '9 Hours', 'Completed'),
          createDay('July 24', 'Friday', '9 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-8',
        name: 'Week 8',
        dateRange: 'July 27 to July 30',
        days: [
          createDay('July 27', 'Monday', '9 Hours', 'Completed'),
          createDay('July 28', 'Tuesday', '9 Hours', 'Completed'),
          createDay('July 29', 'Wednesday', '9 Hours', 'Completed'),
          createDay('July 30', 'Thursday', '9 Hours', 'Completed'),
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
    description: 'My August OJT experience strengthened my ability to adapt to diverse IT challenges involving network security settings, printer configuration, hardware maintenance, and software troubleshooting. Through preparing equipment for deployment, restoring system functionality, and supporting employees with technical needs, I developed greater attention to detail and a stronger commitment to delivering reliable IT services.',
    weeks: [
      {
        id: 'week-9',
        name: 'Week 9',
        dateRange: 'August 4 to August 7',
        days: [
          createDay('August 4', 'Tuesday', '9 Hours', 'Completed'),
          createDay('August 7', 'Friday', '9 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-10',
        name: 'Week 10',
        dateRange: 'August 10 to August 14',
        days: [
          createDay('August 10', 'Monday', '4 Hours', 'Completed'),
          createDay('August 11', 'Tuesday', '9 Hours', 'Completed'),
          createDay('August 13', 'Thursday', '9 Hours', 'Completed'),
          createDay('August 14', 'Friday', '4 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-11',
        name: 'Week 11',
        dateRange: 'August 18 to August 20',
        days: [
          createDay('August 18', 'Tuesday', '10 Hours', 'Completed'),
          createDay('August 20', 'Thursday', '10 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-12',
        name: 'Week 12',
        dateRange: 'August 24 to August 28',
        days: [
          createDay('August 24', 'Monday', '8 Hours', 'Completed'),
          createDay('August 26', 'Wednesday', '8 Hours', 'Completed'),
          createDay('August 27', 'Thursday', '8 Hours', 'Completed'),
          createDay('August 28', 'Friday', '8 Hours', 'Completed'),
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
    description: 'My last month of OJT experience allowed me to strengthen and apply the technical skills I had developed through previous months of hands-on IT support. By handling complex troubleshooting, hardware upgrades, system recovery, and network configuration, I gained greater confidence in applying my knowledge, solving technical problems independently, and delivering reliable IT solutions.',
    weeks: [
      {
        id: 'week-13',
        name: 'Week 13',
        dateRange: 'September 1 to September 4',
        days: [
          createDay('September 1', 'Tuesday', '5 Hours', 'Completed'),
          createDay('September 2', 'Wednesday', '10 Hours', 'Completed'),
          createDay('September 3', 'Thursday', '10 Hours', 'Completed'),
          createDay('September 4', 'Friday', '8 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-14',
        name: 'Week 14',
        dateRange: 'September 8 to September 11',
        days: [
          createDay('September 8', 'Tuesday', '5 Hours', 'Completed'),
          createDay('September 9', 'Wednesday', '9 Hours', 'Completed'),
          createDay('September 10', 'Thursday', '9 Hours', 'Completed'),
          createDay('September 11', 'Friday', '9 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-15',
        name: 'Week 15',
        dateRange: 'September 15 to September 18',
        days: [
          createDay('September 15', 'Tuesday', '5 Hours', 'Completed'),
          createDay('September 16', 'Wednesday', '9 Hours', 'Completed'),
          createDay('September 17', 'Thursday', '9 Hours', 'Completed'),
          createDay('September 18', 'Friday', '9 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-16',
        name: 'Week 16',
        dateRange: 'September 22 to September 25',
        days: [
          createDay('September 22', 'Tuesday', '5 Hours', 'Completed'),
          createDay('September 23', 'Wednesday', '9 Hours', 'Completed'),
          createDay('September 24', 'Thursday', '9 Hours', 'Completed'),
          createDay('September 25', 'Friday', '9 Hours', 'Completed'),
        ],
      },
      {
        id: 'week-17',
        name: 'Week 17',
        dateRange: 'September 29',
        days: [
          createDay('September 29', 'Tuesday', '8 Hours', 'Completed'),
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
    points: [
      'Operating Systems: Windows 10 & Windows 11 Enterprise environments, Windows Administrative Tools, Registry, and Credential Manager.',
      'Productivity & Design Software: Microsoft 365 / Office Suite, Adobe Creative Cloud, Adobe Acrobat Pro DC, and proprietary internal design packages.',
      'Networking & Communication: DHCP / Static IP configurations, POP3 / IMAP / SMTP mail setup, LAN cabling, and enterprise network printer protocols.',
      'Hardware Maintenance: Laptop disassembly/reassembly, RAM and SSD diagnostics, peripheral testing, and thermal paste reapplication.',
      'Asset Management: IT inventory audit tracking, device custody logging, and documentation of technical service actions.',
    ],
  },
  {
    id: 'skills-competencies',
    tag: '03',
    title: 'Skills & Competencies Developed',
    subtitle: 'PROFESSIONAL GROWTH & TECHNICAL CAPABILITIES',
    description:
      'Cultivated practical expertise in corporate IT infrastructure management, problem resolution workflows, and cross-functional user communication during the internship.',
    points: [
      'Systematic Troubleshooting: Enhanced ability to isolate root causes in software conflicts, OS configuration errors, and network disconnects efficiently.',
      'Enterprise Deployment: Mastered rapid workstation imaging, application provisioning, and standardized credential deployments.',
      'Client Communication & Empathy: Developed clear, patient communication when assisting non-technical personnel with software and hardware hurdles.',
      'Accountability & Asset Custody: Strengthened accuracy in auditing company assets, logging hardware turnover, and maintaining precise chain of custody records.',
      'Professional Work Ethic: Demonstrated consistent punctuality, detailed daily time recording (DTR), and proactive support in a fast-paced retail marketing solutions enterprise.',
    ],
  },
];

