import { appInfo } from './appInfo';
import type { LegalDoc } from './types';

const { appName, companyName, supportEmail } = appInfo;

export const termsEn: LegalDoc = {
  title: 'Terms of Service',
  subtitle: `For the ${appName} mobile application`,
  intro:
    `These terms form an agreement between you and ${companyName} governing your use of the ${appName} ` +
    'app. Please read them carefully. By creating an account or using the app, you confirm that you ' +
    'have read, understood and accept everything below. If you do not agree, please do not use the app.',
  sections: [
    {
      id: 'service',
      title: '1. What the service does',
      blocks: [
        {
          kind: 'p',
          text:
            `${appName} is a companion app for two-wheel electric vehicles. It lets you pair with your ` +
            'vehicle over Bluetooth, view battery and vehicle status, lock and unlock the vehicle, locate ' +
            'it, review trip history, navigate, find charging stations, schedule charging, receive ' +
            'anti-theft alerts, and share vehicle access with family members.',
        },
        {
          kind: 'p',
          text:
            'The app is an assistive tool, not a safety device and not a guaranteed anti-theft system. ' +
            'Several features depend on network connectivity, GPS signal, Bluetooth connectivity and ' +
            'vehicle hardware, so they may not be available at all times.',
        },
      ],
    },
    {
      id: 'safety',
      title: '2. Safe use',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Never use the app while riding',
          text:
            'Do not operate your phone while riding. Stop somewhere safe before using the app. You must ' +
            'comply with all applicable road traffic laws. Using the app does not replace your own ' +
            'observation, judgement and responsibility as the rider.',
        },
        {
          kind: 'list',
          items: [
            'Send an unlock command only when you are near the vehicle and can see it, so it cannot be taken.',
            'In-app navigation directions are advisory. Always give priority to road signs, markings and actual traffic conditions.',
            'Do not rely solely on anti-theft alerts to protect your vehicle. Combine them with a physical lock and safe parking.',
            'Remaining range and battery level are estimates and may differ from reality.',
            'Voice control also requires you to be safely stopped; do not use it while moving.',
          ],
        },
      ],
    },
    {
      id: 'account',
      title: '3. Your account',
      blocks: [
        {
          kind: 'list',
          items: [
            'You must be at least 16 years old to create an account. If you are under 18, you may use the app only with the consent of a parent or guardian.',
            'You are responsible for providing accurate information and keeping it up to date.',
            'You are responsible for keeping your password and your device secure. Activity originating from your account is treated as yours.',
            'Notify us immediately if you discover unauthorised access to your account.',
            'Each person should hold one account. Accounts may not be sold, rented or transferred.',
          ],
        },
      ],
    },
    {
      id: 'ownership',
      title: '4. Vehicle ownership and sharing',
      blocks: [
        {
          kind: 'list',
          items: [
            'You may add and control only a vehicle that you lawfully own, or one whose owner has authorised you.',
            'The owner has full authority to grant and revoke family member access, and is responsible for who they grant it to.',
            'A shared member may use the vehicle only within the scope the owner permits.',
            'When you transfer a vehicle to someone else, you must complete the ownership transfer flow in the app so that the new owner gains full control and your access ends.',
            'We do not arbitrate ownership disputes between parties. We may, however, suspend access on receipt of a lawful request from a competent authority.',
          ],
        },
      ],
    },
    {
      id: 'prohibited',
      title: '5. Prohibited conduct',
      blocks: [
        { kind: 'p', text: 'When using the app, you must not:' },
        {
          kind: 'list',
          items: [
            'Access, control or track anyone else vehicle without authorisation.',
            'Use the app to stalk, surveil or harass any person.',
            'Reverse engineer, decompile, tamper with, or attempt to bypass the security measures of the app or the vehicle.',
            'Modify vehicle firmware or the communication protocol in a way that compromises safety.',
            'Automate access to the service using bots, scripts or unauthorised scraping tools.',
            'Send abnormal traffic intended to disrupt or overload the service.',
            'Use the app for any unlawful purpose, or in a way that infringes the rights of others.',
          ],
        },
        {
          kind: 'p',
          text:
            'We may suspend or terminate accounts that breach these terms, with notice to you where ' +
            'circumstances allow.',
        },
      ],
    },
    {
      id: 'ip',
      title: '6. Intellectual property',
      blocks: [
        {
          kind: 'p',
          text:
            `The app as a whole — its source code, interface design, logo, the ${appName} brand and ` +
            'related documentation — belongs to us or to our licensors. We grant you a limited, ' +
            'non-exclusive, non-transferable right to use the app for your personal purposes in ' +
            'accordance with these terms.',
        },
        {
          kind: 'p',
          text:
            'Content you create, such as vehicle photos or the names you assign, remains yours. You grant ' +
            'us permission to store and process it to the extent needed to provide the service.',
        },
      ],
    },
    {
      id: 'notifications',
      title: '7. Notifications and communication',
      blocks: [
        {
          kind: 'p',
          text:
            'The app sends push notifications for events concerning your vehicle and account, such as ' +
            'anti-theft alerts, charge reminders and sharing invitations. You can turn individual ' +
            'categories off in settings, but if you disable security alerts you will not be warned when ' +
            'your vehicle shows unusual activity. Messages about account security and changes to these ' +
            'terms may still be sent by email.',
        },
      ],
    },
    {
      id: 'liability',
      title: '8. Limitation of liability',
      blocks: [
        {
          kind: 'p',
          text:
            'The app is provided on an "as is" and "as available" basis. To the extent permitted by law, ' +
            'we do not warrant that the app will operate uninterrupted or error-free, or that every value ' +
            'it displays is perfectly accurate.',
        },
        { kind: 'p', text: 'We are not liable for loss or damage arising from:' },
        {
          kind: 'list',
          items: [
            'Loss of network connectivity, GPS signal, Bluetooth connection, or vehicle hardware faults.',
            'Theft, damage to, or unauthorised access to the vehicle, including where anti-theft features did not alert you in time.',
            'Accidents or traffic violations occurring while the vehicle is in use.',
            'Access you yourself granted to another person.',
            'Notifications you did not receive because of device settings, battery saver modes, or a fault at the push notification provider.',
            'Third-party services such as maps, routing and speech recognition.',
          ],
        },
        {
          kind: 'p',
          text:
            'Nothing in these limitations excludes liability that cannot be excluded by law, including ' +
            'liability for our wilful misconduct or gross negligence.',
        },
      ],
    },
    {
      id: 'changes',
      title: '9. Changes to the service and these terms',
      blocks: [
        {
          kind: 'p',
          text:
            'We may update, change or discontinue features to improve the product or to meet legal ' +
            'requirements. Where we make material changes to these terms, we will notify you in the app ' +
            'or by email before they take effect. Continuing to use the app after the effective date ' +
            'constitutes acceptance of the updated terms.',
        },
      ],
    },
    {
      id: 'termination',
      title: '10. Termination',
      blocks: [
        {
          kind: 'p',
          text:
            'You may stop using the app and delete your account at any time from Settings. We may ' +
            'terminate or suspend your access if you materially breach these terms, or where required by ' +
            'law. After termination, the intellectual property and limitation of liability provisions ' +
            'continue to apply.',
        },
      ],
    },
    {
      id: 'law',
      title: '11. Governing law and disputes',
      blocks: [
        {
          kind: 'p',
          text:
            'These terms are governed by the laws of Vietnam. The parties will first seek to resolve any ' +
            'dispute through negotiation and conciliation. If no agreement is reached, the dispute will ' +
            'be settled by the competent courts of Vietnam.',
        },
      ],
    },
    {
      id: 'contact-terms',
      title: '12. Contact us',
      blocks: [
        { kind: 'p', text: `For any question about these terms, contact ${supportEmail}.` },
      ],
    },
  ],
};
