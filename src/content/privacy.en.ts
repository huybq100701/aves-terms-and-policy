import { appInfo } from './appInfo';
import type { LegalDoc } from './types';

const {
  appName,
  companyName,
  privacyEmail,
  supportEmail,
  dataRetentionDays,
  accountDeletionDays,
} = appInfo;

export const privacyEn: LegalDoc = {
  title: 'Privacy Policy',
  subtitle: `For the ${appName} mobile application`,
  intro:
    `${companyName} ("we", "us") builds and operates ${appName}, an app for pairing with, tracking ` +
    'and controlling two-wheel electric vehicles. This policy explains what data we collect, why we ' +
    'collect it, who we share it with, and what rights you have. By using the app you agree to the ' +
    'data practices described here.',
  sections: [
    {
      id: 'data-we-collect',
      title: '1. Data we collect',
      blocks: [
        {
          kind: 'p',
          text:
            'We collect only what the app needs to function. The table below lists each category of ' +
            'data and the purpose it serves.',
        },
        {
          kind: 'table',
          head: ['Category', 'What specifically', 'Purpose'],
          rows: [
            [
              'Account information',
              'Name, email address, phone number, profile photo, hashed password',
              'Create and authenticate your account, recover passwords, contact you for support',
            ],
            [
              'Vehicle data',
              'Vehicle name, VIN or serial number, model, lock state, battery level, battery health (SOH), charge schedules',
              'Show vehicle status, sync across your devices, diagnose battery condition',
            ],
            [
              'Location',
              'GPS location of your device and of the vehicle, location history, trip routes',
              'Locate your vehicle, turn-by-turn navigation, find nearby charging stations, trip history, anti-theft alerts',
            ],
            [
              'Bluetooth data',
              'The vehicle BLE device identifier, scan results, connection logs',
              'Connect directly to the vehicle to lock, unlock and read telemetry',
            ],
            [
              'Camera and photo library',
              'Photos you deliberately capture or select, QR code scans',
              'Set your profile and vehicle photos, scan vehicle-sharing QR codes',
            ],
            [
              'Microphone and voice',
              'Audio captured while you actively use voice control',
              'Recognise spoken commands to lock, unlock and find your vehicle',
            ],
            [
              'Emergency contacts',
              'Names and phone numbers you enter yourself',
              'Send a help request when you report an incident',
            ],
            [
              'Family sharing data',
              'Email or phone number of people you invite, invitation status, vehicle access grants',
              'Let family members share a vehicle with you',
            ],
            [
              'Device and technical information',
              'Device model, OS version, app version, push notification token, crash logs',
              'Deliver notifications, detect faults, improve stability',
            ],
            [
              'Usage data',
              'Aggregated in-app events: screens viewed, features used',
              'Understand how the app is used so we can improve it',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'What we do NOT collect',
          text:
            'We do not collect payment information, health data, your phone contacts, SMS messages, or ' +
            'your web browsing history. We do not sell your personal data to anyone.',
        },
      ],
    },
    {
      id: 'permissions',
      title: '2. Device permissions',
      blocks: [
        {
          kind: 'p',
          text:
            'The app requests each permission at the moment it is needed, with an explanation. You can ' +
            'deny or revoke any permission in your system settings; only the related feature stops ' +
            'working, and the rest of the app continues to function.',
        },
        {
          kind: 'table',
          head: ['Permission', 'Why we need it', 'If you deny it'],
          rows: [
            [
              'Location (while using the app)',
              'Show your position on the map, navigate to your vehicle, find nearby charging stations',
              'Map, navigation and nearby charging stations are unavailable',
            ],
            [
              'Bluetooth',
              'Scan for, connect to and send commands to your vehicle. On Android we declare the neverForLocation flag because we do not derive your location from Bluetooth',
              'The app cannot connect to your vehicle over Bluetooth',
            ],
            [
              'Camera',
              'Capture profile and vehicle photos, scan vehicle-sharing QR codes',
              'You cannot take photos or scan QR codes in the app',
            ],
            [
              'Photo library',
              'Pick an existing photo as your profile or vehicle image',
              'You can only take new photos, not choose existing ones',
            ],
            [
              'Microphone and speech recognition',
              'Hear and interpret the voice commands you speak to control the vehicle',
              'Voice control is unavailable',
            ],
            [
              'Notifications',
              'Anti-theft alerts, charge reminders, sharing invitations, system messages',
              'You receive no alerts, including anti-theft alerts',
            ],
            [
              'Biometrics (Face ID or fingerprint)',
              'Unlock the app and confirm sensitive commands quickly and securely',
              'Use your password instead',
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'About biometric data',
          text:
            'Fingerprint and Face ID data is processed entirely on-device by the operating system. The ' +
            'app receives only a pass or fail result and never reads, stores or transmits biometric data.',
        },
      ],
    },
    {
      id: 'location-detail',
      title: '3. Location data in detail',
      blocks: [
        {
          kind: 'p',
          text:
            'Location is the most sensitive data the app handles, so we describe it separately and in full.',
        },
        {
          kind: 'list',
          items: [
            'Your device location is read only while the app is open and you are using a feature that needs it: the map, navigation, or nearby charging stations. The app does not track your location in the background.',
            'Vehicle location is reported by the vehicle itself and powers the locate and anti-theft features. This data belongs to the vehicle owner.',
            'Trip history — route, distance and duration — is stored so you can review it. You can delete individual trips in the app.',
            'Family members you grant access to can see the vehicle location. You can revoke that access at any time.',
            'We never use location for advertising and never share it with advertisers or data brokers.',
          ],
        },
      ],
    },
    {
      id: 'voice',
      title: '4. Voice processing',
      blocks: [
        {
          kind: 'list',
          items: [
            'The microphone activates only when you deliberately start voice control. The app does not listen continuously and has no always-on wake word.',
            'Speech-to-text conversion is performed by the operating system recogniser (Apple or Google) under that provider privacy policy.',
            'We do not retain audio recordings. Only the recognised command, for example "lock the vehicle", is acted on and then discarded.',
          ],
        },
      ],
    },
    {
      id: 'sharing',
      title: '5. Sharing data with third parties',
      blocks: [
        {
          kind: 'p',
          text:
            'We share data only with service providers the app depends on, limited to what each provider ' +
            'needs and governed by a data processing agreement.',
        },
        {
          kind: 'table',
          head: ['Provider', 'Data shared', 'Purpose'],
          rows: [
            [
              'Google Firebase (Cloud Messaging, Analytics, Crashlytics, Authentication)',
              'Push notification token, aggregated usage events, crash logs, sign-in identifiers',
              'Deliver push notifications, usage analytics, crash reporting, Google sign-in',
            ],
            [
              'Google Sign-In and Apple Sign-In',
              'Email address and name from the account you choose',
              'Let you sign in without a separate password',
            ],
            [
              'Map and routing services',
              'Origin and destination coordinates',
              'Calculate routes and render maps',
            ],
            [
              'Operating system speech recognition (Apple or Google)',
              'Voice command audio',
              'Convert speech to text',
            ],
            [
              'Server infrastructure providers',
              'All app data, encrypted at rest',
              'Host and operate the service',
            ],
          ],
        },
        {
          kind: 'p',
          text:
            'We may also disclose data in response to a lawful request from a competent authority, where ' +
            'necessary to protect the rights and safety of our users, or as part of a merger, acquisition ' +
            'or business transfer. In the last case, you will be notified beforehand.',
        },
      ],
    },
    {
      id: 'retention',
      title: '6. Storage and retention',
      blocks: [
        {
          kind: 'list',
          items: [
            'Data is transmitted over TLS-encrypted channels and encrypted at rest on our servers.',
            'Authentication tokens are stored in the secure enclave provided by the operating system: Keychain on iOS, Keystore on Android.',
            'Account and vehicle data is retained for as long as your account remains active.',
            `Technical and crash logs are retained for at most ${dataRetentionDays} days and then deleted automatically.`,
            `When you request account deletion, we erase your personal data within ${accountDeletionDays} days, except data we are legally required to keep.`,
          ],
        },
      ],
    },
    {
      id: 'your-rights',
      title: '7. Your rights',
      blocks: [
        { kind: 'p', text: 'You have the following rights over your personal data.' },
        {
          kind: 'list',
          items: [
            'Access: view your account information and vehicle data directly in the app, or request a copy of your data.',
            'Rectification: update your name, email, phone number, profile photo and vehicle details in the app.',
            'Erasure: delete your account from Settings, or send a request to the email address below.',
            'Withdraw consent: revoke any individual permission in your device system settings at any time.',
            'Restriction and objection: ask us to pause a particular kind of processing.',
            'Complaint: raise a complaint with us or with your competent data protection authority.',
          ],
        },
        {
          kind: 'p',
          text:
            `To exercise any of these rights, email ${privacyEmail}. We respond within 30 days of ` +
            'receiving a valid request.',
        },
      ],
    },
    {
      id: 'children',
      title: '8. Children',
      blocks: [
        {
          kind: 'p',
          text:
            `${appName} is not intended for anyone under 16 and we do not knowingly collect children's ` +
            'data. If we learn that we have collected data from a child under 16 without parental or ' +
            'guardian consent, we delete it. If you are a parent or guardian and believe your child has ' +
            `provided us with data, please contact ${privacyEmail}.`,
        },
      ],
    },
    {
      id: 'transfers',
      title: '9. International data transfers',
      blocks: [
        {
          kind: 'p',
          text:
            'Some of our service providers host data outside Vietnam. When your data is transferred ' +
            'abroad, we apply appropriate safeguards required by applicable data protection law, ' +
            'including standard contractual clauses with the provider.',
        },
      ],
    },
    {
      id: 'changes',
      title: '10. Changes to this policy',
      blocks: [
        {
          kind: 'p',
          text:
            'We may update this policy as app features or legal requirements change. The date of the ' +
            'most recent update is always shown at the top of this page. For material changes that ' +
            'affect your rights, we will notify you in the app or by email before they take effect.',
        },
      ],
    },
    {
      id: 'contact',
      title: '11. Contact us',
      blocks: [
        {
          kind: 'p',
          text:
            `For any question about this privacy policy, contact ${privacyEmail}. For technical issues ` +
            `or help using the app, contact ${supportEmail}.`,
        },
      ],
    },
  ],
};
