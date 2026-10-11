import { appInfo } from './appInfo';
import type { LegalDoc } from './types';

const { appName, companyLegalNameEn, taxCode, supportEmail, phone, websiteDomain } = appInfo;

const partA = 'Part A – General terms and conditions';
const partB = 'Part B – Service-specific terms and conditions';

export const termsEn: LegalDoc = {
  title: 'General Terms and Conditions',
  subtitle: `For services of ${companyLegalNameEn} · Applies to the ${appName} mobile application`,
  intro:
    'This document has two parts: Part A sets out the general terms and conditions; Part B sets out ' +
    'the specific terms and conditions for the Charging Station Service and the Battery Swap Service. ' +
    'Please read it carefully before accessing the AVES Platform or using the Services. This English ' +
    'version is a translation; if it differs from the Vietnamese version, the Vietnamese version ' +
    'prevails.',
  sections: [
    {
      id: 'general',
      part: partA,
      title: '1. General provisions',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '1.1.',
              text:
                'These General Terms and Conditions (the "GTC") apply to organisations and individuals ' +
                'using the Charging Station Service, the Battery Swap Service and other Services provided ' +
                `by ${companyLegalNameEn} (tax code: ${taxCode}) ("AVES") and other Service Providers.`,
            },
            {
              num: '1.2.',
              text:
                `The GTC, together with any amendments and supplements published on the AVES Website and/or the ${appName} ` +
                'App (together, the "AVES Platform"), take effect from the time of publication and govern ' +
                'the rights and obligations of the parties throughout the period in which the Customer ' +
                'and/or User accesses the AVES Platform and/or uses the Services. By accessing the AVES ' +
                'Platform and/or using the Services, the Customer and/or User confirms having carefully ' +
                'read, understood and agreed to be bound by these GTC.',
            },
            {
              num: '1.3.',
              text:
                'If the Customer and/or User does not agree with the GTC and/or any amendment or ' +
                'supplement to them, the Customer and/or User may stop using the Services at any time in ' +
                'accordance with Article 13.2 of these GTC. Continued access to the AVES Platform and/or ' +
                'use of the Services after any amended or replacement version of the GTC is published ' +
                'constitutes the Customer\'s and/or User\'s agreement to be bound by that amendment or ' +
                'replacement.',
            },
          ],
        },
      ],
    },
    {
      id: 'definitions',
      part: partA,
      title: '2. Definitions and interpretation',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '2.1.',
              title: '"Service Provider":',
              text:
                'AVES, its subsidiaries and affiliates and/or Partners of AVES that provide Services to ' +
                'the Customer and/or User.',
            },
            {
              num: '2.2.',
              title: '"AVES Policies":',
              text: 'the policies issued by AVES and made publicly available on the AVES Platform.',
            },
            {
              num: '2.3.',
              title: '"Charging Station Service":',
              text:
                'the electric charging service for AVES E-Motorbikes provided by a Service Provider ' +
                'through the Charging Station System.',
            },
            {
              num: '2.4.',
              title: '"Battery Swap Service":',
              text:
                'the service of swapping E-Motorbike Batteries for AVES-branded electric motorbikes ' +
                '("AVES E-Motorbikes") provided by a Service Provider through the Battery Swap Station ' +
                'System.',
            },
            {
              num: '2.5.',
              title: '"Services":',
              text:
                'all services provided by AVES or another Service Provider to the Customer and/or User, ' +
                'including but not limited to the Charging Station Service, the Battery Swap Service and ' +
                'utilities related to charging and battery swapping for electric vehicles.',
            },
            {
              num: '2.6.',
              title: '"Compliant":',
              text:
                'the condition in which an AVES E-Motorbike and/or E-Motorbike Battery meets the technical ' +
                'and safety standards published by AVES from time to time, is of clear origin, has been ' +
                'maintained as required and has not been installed or repaired through channels not ' +
                'approved by AVES.',
            },
            {
              num: '2.7.',
              title: '"Partner":',
              text:
                'any organisation, enterprise or individual that has a business cooperation contract or ' +
                'agreement with AVES for the purpose of deploying, operating or providing the Services.',
            },
            {
              num: '2.8.',
              title: '"Customer":',
              text: 'any individual or organisation that uses Services provided by a Service Provider.',
            },
            {
              num: '2.9.',
              title: '"User":',
              text:
                'anyone who uses the Customer\'s Account and/or is permitted by the Customer to link to ' +
                'the Account in order to use the Services.',
            },
            {
              num: '2.10.',
              title: '"Charging Station System":',
              text:
                'the system of charging stations, charging equipment and related infrastructure invested ' +
                'in, installed and/or operated by a Service Provider to provide the Charging Station ' +
                'Service.',
            },
            {
              num: '2.11.',
              title: '"Battery Swap Station System":',
              text:
                'the system of battery swap stations and cabinets and related infrastructure invested ' +
                'in, installed and/or operated by a Service Provider to provide the Battery Swap Service.',
            },
            {
              num: '2.12.',
              title: '"E-Motorbike Battery":',
              text:
                'a battery for an AVES E-Motorbike, including batteries fitted to the vehicle and ' +
                'batteries supplied or swapped through the Battery Swap Station System.',
            },
            {
              num: '2.13.',
              title: '"Account":',
              text:
                'the account registered by the Customer on the App to access the AVES Platform and use ' +
                'the Services.',
            },
            {
              num: '2.14.',
              title: '"Carbon Credit":',
              text:
                'a commercially tradable certificate representing the right to emit one tonne of carbon ' +
                'dioxide (CO2) or one tonne of carbon dioxide (CO2) equivalent.',
            },
            {
              num: '2.15.',
              title: '"App":',
              text:
                `the ${appName} mobile application developed by AVES and published on app stores, ` +
                'including its updated versions.',
            },
            {
              num: '2.16.',
              title: '"AVES":',
              text:
                `${companyLegalNameEn}, or such other name as it may have from time to time, which ` +
                'manufactures AVES E-Motorbike products (together, "AVES Vehicles").',
            },
            {
              num: '2.17.',
              title: '"AVES Website":',
              text:
                `the official website of AVES at the domain "${websiteDomain}" or another domain as ` +
                'notified by AVES from time to time.',
            },
          ],
        },
      ],
    },
    {
      id: 'eligibility',
      part: partA,
      title: '3. Conditions for Customers and Users',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '3.1.',
              text:
                'Throughout the period of using the AVES Platform and the Services, the Customer and/or ' +
                'User represents and warrants that:',
              sub: [
                {
                  num: 'a.',
                  text:
                    'the Customer and/or User has full civil act capacity under the law to use the AVES ' +
                    'Platform and the Services. If the Customer and/or User is a minor or has limited ' +
                    'civil act capacity under the law, they may use the AVES Platform and the Services ' +
                    'only with the support, supervision and approval of a parent or legal guardian;',
                },
                {
                  num: 'b.',
                  text:
                    'the Customer uses their own lawful information to register an Account on the AVES ' +
                    'Platform and undertakes that all information the Customer and/or User provides to ' +
                    'AVES while using the AVES Platform and the Services is truthful, not misleading, ' +
                    'complete, accurate and kept up to date;',
                },
                {
                  num: 'c.',
                  text:
                    'the Customer and/or User must use the Services in accordance with these GTC, the ' +
                    'electric vehicle charging instructions detailed on the AVES Platform (the "EV ' +
                    'Charging Instructions") and the battery use and care instructions detailed on the ' +
                    'AVES Platform (the "Battery Use and Care Instructions");',
                },
                {
                  num: 'd.',
                  text:
                    'the Customer and/or User agrees to cooperate and provide the information requested ' +
                    'by the Service Provider that is necessary to use the Services;',
                },
                {
                  num: 'e.',
                  text:
                    'the Customer and/or User must follow the safety instructions for using the App. The ' +
                    'Customer and/or User must stop using the Services, notify the Service Provider ' +
                    'immediately and follow its directions if a battery is lost or safety is compromised, ' +
                    'if there is a risk to safety, if a problem or incident occurs while using the ' +
                    'Services, or whenever any assistance is needed while using the Services;',
                },
                {
                  num: 'f.',
                  text:
                    'if the Customer is an organisation, the User of the AVES Platform and the Services ' +
                    'must be the Customer\'s legal representative or lawfully authorised person. AVES ' +
                    'has no obligation to verify the User\'s capacity;',
                },
                {
                  num: 'g.',
                  text:
                    'the Customer and/or User must comply with the rules on AVES E-Motorbike ownership ' +
                    'and sharing:',
                  sub: [
                    {
                      text:
                        'The Customer and/or User may add and control only AVES E-Motorbikes of which ' +
                        'they are the lawful owner (the "Vehicle Owner") or for which they have the ' +
                        'Vehicle Owner\'s permission. The Vehicle Owner bears full and ultimate ' +
                        `responsibility for managing the vehicle on ${appName}.`,
                    },
                    {
                      text:
                        'When transferring an AVES E-Motorbike to another person, the Customer and/or ' +
                        'User must complete the ownership transfer procedure in the App and comply with ' +
                        'applicable law, so that the new owner has full owner rights and the current ' +
                        `Customer and/or User can no longer access or perform actions on ${appName} ` +
                        'relating to that AVES E-Motorbike. If the current Customer and/or User can still ' +
                        `access or perform actions on ${appName} relating to an AVES E-Motorbike whose ` +
                        'ownership has been transferred, they must notify AVES immediately so that the ' +
                        'parties can work together to resolve it.',
                    },
                    {
                      text:
                        `AVES and the ${appName} App are not responsible for resolving vehicle ownership ` +
                        `disputes between parties. AVES and the ${appName} App will cooperate in ` +
                        'providing relevant information (if any) and may take necessary actions upon ' +
                        'receiving a request for information from a competent individual, authority or ' +
                        'organisation in accordance with the law.',
                    },
                  ],
                },
              ],
            },
            {
              num: '3.2.',
              text:
                'The Customer and/or User and/or guardian undertakes to bear full responsibility for and ' +
                'compensate all damage arising from use of the AVES Platform and/or the Services when the ' +
                'conditions and provisions of these GTC are not met or complied with.',
            },
          ],
        },
      ],
    },
    {
      id: 'account',
      part: partA,
      title: '4. Account registration',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '4.1.',
              text:
                'A Customer who meets the conditions in Article 3 registers an Account on the App and is ' +
                'responsible for managing, storing and keeping the Account information secure. Every ' +
                'action performed on the App through the Customer\'s Account is deemed to be an action of ' +
                'the Customer.',
            },
            {
              num: '4.2.',
              text:
                'The Customer may not transfer, sell, give, lend, rent out, or authorise or license any ' +
                'third party to use the Account in any form, except as provided in these GTC.',
            },
            {
              num: '4.3.',
              text: 'AVES may refuse to register any Account that violates these GTC.',
            },
            {
              num: '4.4.',
              text:
                'If the Customer discovers that access credentials have been lost or stolen, that the ' +
                'Account has been accessed without authorisation, or any other unusual situation ' +
                'affecting the Account, the Customer must notify AVES immediately using the contact ' +
                'methods in Article 16 of these GTC.',
            },
          ],
        },
      ],
    },
    {
      id: 'user-information',
      part: partA,
      title: '5. User information',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '5.1.',
              text:
                'AVES may ask the Customer to provide the information (including personal data) ' +
                'necessary to provide the Services. This information is collected, processed and used in ' +
                'accordance with the law and the AVES Personal Data Protection Policy published on the ' +
                'AVES Website and/or the App.',
            },
            {
              num: '5.2.',
              text:
                'If the Customer refuses to provide such information, the Service Provider will be ' +
                'unable to provide the Services, and AVES is not responsible for any risk or damage ' +
                'arising from the information not being provided.',
            },
          ],
        },
      ],
    },
    {
      id: 'platform',
      part: partA,
      title: '6. The AVES Platform',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '6.1.',
              text:
                'AVES may change, modify, suspend or discontinue all or any part of the AVES Platform at ' +
                'any time.',
            },
            {
              num: '6.2.',
              text:
                'AVES does not guarantee the timeliness, usefulness or completeness of information on ' +
                'the AVES Platform and is not liable for indirect damage arising from use of, or ' +
                'inability to use, the AVES Platform.',
            },
            {
              num: '6.3.',
              text:
                'The AVES Platform may contain advertising, sponsorship, or links or references to other ' +
                'websites operated by third parties for the Customer\'s convenience. AVES is not ' +
                'responsible for the content, accuracy or opinions expressed in such advertising, ' +
                'sponsorship, links or websites. A decision by the Customer to visit third-party websites ' +
                'or to use services or goods on them is entirely the Customer\'s own and creates no legal ' +
                'liability for AVES.',
            },
          ],
        },
      ],
    },
    {
      id: 'services',
      part: partA,
      title: '7. Provision and use of the Services',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '7.1.',
              text:
                'AVES will make reasonable efforts to provide continuous access to the Account but does ' +
                'not guarantee that the Services will always be available. The Services may be ' +
                'unavailable during maintenance, emergencies, Force Majeure Events or other circumstances ' +
                'notified by AVES.',
            },
            {
              num: '7.2.',
              text:
                'Users must comply with these GTC. The Customer and the User each acknowledge the other\'s ' +
                'actions, and an action taken by either of them is deemed to be taken by both. If either ' +
                'of them breaches these GTC, the Customer and the User are jointly liable to compensate ' +
                'the Service Provider.',
            },
            {
              num: '7.3.',
              text:
                'Carbon Credits arising from the Services, the Charging Station System and the Battery ' +
                'Swap Station System are wholly owned by AVES. AVES has full rights to register, deploy, ' +
                'manage and exploit such Carbon Credits and to enjoy any rights, benefits and revenue ' +
                'arising from doing so.',
            },
          ],
        },
      ],
    },
    {
      id: 'fees',
      part: partA,
      title: '8. Service fees and payment',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '8.1.',
              title: 'Service fees.',
              text:
                'Details of Service fees, taxes and any other payments relating to use of the Services ' +
                'are published on the AVES Platform.',
            },
            {
              num: '8.2.',
              title: 'Payment methods.',
              text:
                'The Customer and the User pay using the methods integrated into the AVES Platform. AVES ' +
                'may implement electronic payment methods on the AVES Platform itself or in cooperation ' +
                'with service providers, in accordance with the law.',
            },
            {
              num: '8.3.',
              title: 'Payment responsibility.',
              sub: [
                {
                  num: 'a.',
                  text:
                    'The Customer must pay all Service fees in full. A User may also pay on the ' +
                    'Customer\'s behalf through a linked Account. For clarity, the Customer is ultimately ' +
                    'responsible for all payment obligations.',
                },
                {
                  num: 'b.',
                  text:
                    'The payment deadline for each type of Service fee and/or amount payable is shown in ' +
                    'the App or as published by AVES from time to time.',
                },
                {
                  num: 'c.',
                  text:
                    'Any amount the Customer does not pay in full and on time, as notified by AVES, is ' +
                    'overdue, and AVES may apply the remedies set out in Article 8.4 of these GTC.',
                },
              ],
            },
            {
              num: '8.4.',
              title: 'Remedies for late payment.',
              sub: [
                {
                  num: 'a.',
                  text:
                    'When any amount owed by the Customer is overdue, AVES will send the Customer three ' +
                    '(03) payment reminders through the App, at least five (05) days apart.',
                },
                {
                  num: 'b.',
                  text:
                    'If the Customer has not paid, or has not paid in full, fifteen (15) days after AVES ' +
                    'sends the first reminder, AVES may take one or more of the following measures:',
                  sub: [
                    {
                      num: '(i)',
                      text:
                        'require the Customer to pay interest on the overdue amount at 0.05% per day ' +
                        'from the due date until the date the Customer actually pays AVES in full;',
                    },
                    {
                      num: '(ii)',
                      text:
                        'restrict or suspend the Customer\'s and User\'s right to use the Services, or ' +
                        'limit battery charging and/or lock the connection between vehicle and battery ' +
                        'by technical means, until the Customer pays all overdue amounts in full; and',
                    },
                    {
                      num: '(iii)',
                      text:
                        'require the Customer to compensate AVES and related parties for all losses ' +
                        'arising from the Customer\'s breach of its payment obligations.',
                    },
                  ],
                },
              ],
            },
            {
              num: '8.5.',
              title: 'Notice of fee changes.',
              text:
                'AVES will announce changes to Service fees through the AVES Platform at least ten (10) ' +
                'days before they take effect. Continued use of the Services by the Customer and the ' +
                'User after the new fee schedule takes effect constitutes acceptance of the new fees.',
            },
          ],
        },
      ],
    },
    {
      id: 'promotions',
      part: partA,
      title: '9. Promotions, offers and discounts',
      blocks: [
        {
          kind: 'p',
          text:
            'The Customer and the User undertake to use promotions, offers and discounts run by AVES for ' +
            'their intended purpose and in line with their conditions, and not to copy, transfer, ' +
            'commercialise or use them fraudulently in any way.',
        },
      ],
    },
    {
      id: 'intellectual-property',
      part: partA,
      title: '10. Intellectual property',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '10.1.',
              text:
                'Intellectual property rights, including but not limited to copyright, related rights, ' +
                'trademarks, trade names, industrial designs, inventions, utility solutions, trade ' +
                'secrets, know-how, software, processes, designs, documents, data and other proprietary ' +
                'rights, whether or not registered, relating to the Services and the AVES Platform are ' +
                'lawfully owned or used by AVES and/or its licensors (if any).',
            },
            {
              num: '10.2.',
              text:
                'Use of the Services and the AVES Platform by the Customer and the User does not transfer ' +
                'or grant them any intellectual property rights. The Customer and the User may not copy, ' +
                'modify, distribute, republish, commercially exploit or create derivative works from any ' +
                'content without AVES\'s prior written consent.',
            },
          ],
        },
      ],
    },
    {
      id: 'force-majeure',
      part: partA,
      title: '11. Force majeure',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '11.1.',
              text:
                'A Force Majeure Event is an event that occurs objectively, cannot be foreseen and cannot ' +
                'be remedied despite all necessary measures and capabilities having been applied, ' +
                'including but not limited to fire, flood or natural disaster, war, strikes, and changes ' +
                'in State policy or law. Financial difficulty of any kind is not a Force Majeure Event.',
            },
            {
              num: '11.2.',
              text:
                'Neither party is liable for delay or interruption in performing its obligations if it is ' +
                'affected by a Force Majeure Event, provided that: (i) the affected party notifies the ' +
                'other party within seven (07) days of the Force Majeure Event occurring; and (ii) the ' +
                'affected party makes reasonable efforts to minimise its adverse effects. The affected ' +
                'party will be granted a reasonable extension of time to perform the affected obligations.',
            },
          ],
        },
      ],
    },
    {
      id: 'indemnity',
      part: partA,
      title: '12. Indemnity and limitation of liability',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '12.1.',
              text:
                'The Customer must indemnify and reimburse the Service Provider for all losses, damage, ' +
                'costs, claims and liabilities of any kind that the Service Provider incurs or that arise ' +
                'from a breach by the Customer or User of these GTC or applicable law.',
            },
            {
              num: '12.2.',
              text:
                'The sole remedy for any breach by AVES of these GTC is a refund of the Service fees the ' +
                'Customer paid to AVES for the Service concerned, unless the law provides otherwise.',
            },
            {
              num: '12.3.',
              text:
                'If at any time AVES reasonably determines that any lawsuit arising from or relating to ' +
                'the Customer\'s and/or User\'s use of the Services may adversely affect AVES, AVES may ' +
                'require the Customer and/or User to request the competent authority to allow AVES to ' +
                'join the proceedings and present arguments in its defence. The Customer may not enter ' +
                'into any settlement affecting AVES\'s interests without AVES\'s prior written consent.',
            },
          ],
        },
      ],
    },
    {
      id: 'suspension-termination',
      part: partA,
      title: '13. Suspension and termination',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '13.1.',
              text:
                'AVES may refuse, suspend or terminate, in whole or in part, the right to use the ' +
                'Services and/or access the AVES Platform in the following cases:',
              sub: [
                {
                  num: '(i)',
                  text:
                    'the Customer and the User breach the law, these GTC and/or the AVES Policies and do ' +
                    'not remedy the breach within the period notified by AVES;',
                },
                { num: '(ii)', text: 'a Force Majeure Event occurs;' },
                {
                  num: '(iii)',
                  text:
                    'the Customer\'s and User\'s use of the AVES Platform or the Services harms other ' +
                    'Customers and/or third parties;',
                },
                {
                  num: '(iv)',
                  text:
                    'AVES is dissolved, becomes bankrupt or suspends operations, or AVES suspends or ' +
                    'stops providing any Service at its discretion, provided that AVES refunds any ' +
                    'amounts collected in advance (if any) for the part of the Services not yet used; or',
                },
                {
                  num: '(v)',
                  text:
                    'other cases provided by law, these GTC and/or the AVES Policies.',
                },
              ],
            },
            {
              num: '13.2.',
              text:
                'The Customer may stop using the Services at any time if they do not agree with the GTC, ' +
                'following the instructions on the AVES Platform, provided that the Customer has ' +
                'fulfilled its obligations under these GTC and the AVES policies.',
            },
            {
              num: '13.3.',
              text:
                'Suspension or termination of the Services does not affect the rights, remedies, ' +
                'obligations and liabilities of the parties that arose before the termination date.',
            },
          ],
        },
      ],
    },
    {
      id: 'governing-law',
      part: partA,
      title: '14. Governing law and dispute resolution',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '14.1.',
              text: 'These GTC are governed by and construed in accordance with the laws of Vietnam.',
            },
            {
              num: '14.2.',
              text:
                'Any dispute arising from or relating to these GTC, the AVES Policies or the use of the ' +
                'Services or the AVES Platform will first be resolved through negotiation and mediation. ' +
                'If the dispute is not resolved by negotiation or mediation within 90 days of arising, ' +
                'the parties agree that it will be resolved by the Court where AVES has its head office.',
            },
          ],
        },
      ],
    },
    {
      id: 'authorities',
      part: partA,
      title: '15. Cooperation with State authorities',
      blocks: [
        {
          kind: 'p',
          text:
            'The Customer acknowledges that AVES may verify and deal with breaches of these GTC and the ' +
            'AVES Policies to the fullest extent permitted by law. AVES may report breaches to, and ' +
            'participate and cooperate with, competent authorities or other third parties in dealing ' +
            'with them.',
        },
      ],
    },
    {
      id: 'contact',
      part: partA,
      title: '16. Notices, contact and support',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '16.1.',
              text:
                'The Customer and the User may contact AVES by sending a written request to ' +
                `${supportEmail} or by calling the hotline: ${phone}.`,
            },
            {
              num: '16.2.',
              text:
                'AVES may send notices to the Customer and the User by any of the following means: ' +
                'notification on the AVES Platform, SMS, email, phone call, or a written notice sent to ' +
                'the Account registration details, or in any other way agreed with the Customer.',
            },
          ],
        },
      ],
    },
    {
      id: 'miscellaneous',
      part: partA,
      title: '17. Other terms and conditions',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '17.1.',
              text:
                'To verify the identity of the Customer and/or User, ensure security and safety while ' +
                'providing the Services and protect the lawful rights and interests of the parties ' +
                'concerned, the Service Provider will use cameras at Charging Station/Battery Swap ' +
                'Station sites and other appropriate measures to identify the Customer and/or User, ' +
                'E-Motorbike Batteries, vehicle types and licence plates, and the activities of the ' +
                'Customer and/or User in the Charging Station/Battery Swap Station area. This information ' +
                'is stored, managed and kept confidential by AVES and is disclosed only as required by ' +
                'law and competent State authorities.',
            },
            {
              num: '17.2.',
              text:
                'The Customer may not assign, transfer or otherwise dispose of any of its rights and ' +
                'obligations under these GTC without AVES\'s prior written consent.',
            },
            {
              num: '17.3.',
              text:
                'AVES may assign, transfer or otherwise dispose of any or all of its rights and ' +
                'obligations under these GTC by notifying the Customer or publishing the information on ' +
                'the AVES Platform. Continued use of the Services, or access to and use of the AVES ' +
                'Platform, by the Customer and the User after any such assignment, transfer or disposal ' +
                'constitutes their consent to it.',
            },
            {
              num: '17.4.',
              text:
                'Any failure or delay by AVES in exercising any right or remedy under these GTC, the AVES ' +
                'Policies or the law is not a waiver of that right or remedy unless the waiver is made in ' +
                'writing.',
            },
            {
              num: '17.5.',
              text:
                'If any provision or part of a provision of these GTC becomes invalid, unlawful or ' +
                'unenforceable, it is deemed deleted, without affecting the validity and enforceability ' +
                'of the rest of these GTC.',
            },
            {
              num: '17.6.',
              text:
                'These GTC are made in Vietnamese and English. In case of any inconsistency between the ' +
                'Vietnamese version and the English translation, the Vietnamese version prevails.',
            },
          ],
        },
      ],
    },
    {
      id: 'charging-station-service',
      part: partB,
      title: 'I. Charging Station Service',
      blocks: [
        { kind: 'h3', text: '1. Using the Charging Station Service' },
        {
          kind: 'clauses',
          items: [
            {
              num: '1.1.',
              text:
                'The Customer and/or User agrees to comply with the rules set by the Service Provider ' +
                'concerning its property and its use, including but not limited to codes of conduct, ' +
                'parking rules and parking time limits. The Customer and/or User is fully responsible for ' +
                'any damage, fees, fines or losses resulting from failure to comply with any rule of the ' +
                'Service Provider.',
            },
            {
              num: '1.2.',
              text:
                'In an emergency or any situation threatening damage to property, injury or human life, ' +
                `the Customer and/or User must immediately call the hotline: ${phone} or the emergency ` +
                'numbers of the competent State authorities (113, 114, 115) and follow the instructions ' +
                'given.',
            },
          ],
        },
        { kind: 'h3', text: '2. Charging Station Service fees and payment' },
        {
          kind: 'clauses',
          items: [
            {
              num: '2.1.',
              text:
                'The cost of each use of the Charging Station Service depends on the fee shown in the ' +
                'App and the unit price published by AVES on its platforms from time to time.',
            },
            {
              num: '2.2.',
              text:
                'The Customer and/or User bears all costs and risks arising while using the Charging ' +
                'Station Service (including but not limited to the cost of travelling to the Charging ' +
                'Station, parking fees, tolls, and personal injury and/or property damage incurred while ' +
                'entering or leaving the Charging Station site and using the Charging Station Service ' +
                'that is not caused by the Service Provider\'s intentional fault).',
            },
          ],
        },
        { kind: 'h3', text: '3. Exclusions of liability' },
        {
          kind: 'p',
          text:
            'The Service Provider may unilaterally refuse or cancel a request by the Customer and/or User ' +
            'to use the Charging Station Service, and is not liable for any resulting damage to the ' +
            'Customer and/or User, for the following reasons:',
        },
        {
          kind: 'clauses',
          items: [
            {
              num: '3.1.',
              text:
                'the Customer\'s/User\'s AVES Vehicle has been in an accident or used in testing beyond ' +
                'the scope of normal use;',
            },
            {
              num: '3.2.',
              text:
                'there are foreign objects or unusual marks on the surface of the battery of the ' +
                'Customer\'s/User\'s AVES Vehicle;',
            },
            {
              num: '3.3.',
              text:
                'the Customer\'s/User\'s AVES Vehicle and/or the battery installed in it is not ' +
                'Compliant (including but not limited to a vehicle/battery that is damaged, of unknown ' +
                'origin, not maintained as required and/or installed or repaired through channels not ' +
                'approved by the Service Provider or AVES);',
            },
            {
              num: '3.4.',
              text:
                'the Customer and/or User has not remedied a breach of payment obligations to AVES;',
            },
            {
              num: '3.5.',
              text:
                'the Customer and/or User breaches or fails to perform other obligations under the GTC ' +
                'and applicable law;',
            },
            { num: '3.6.', text: 'a Force Majeure Event occurs;' },
            {
              num: '3.7.',
              text:
                'for technical reasons, the Service Provider is unable to provide the Charging Station ' +
                'Service; or',
            },
            {
              num: '3.8.',
              text: 'other cases provided in legal documents or State policies.',
            },
          ],
        },
        { kind: 'h3', text: '4. Compensation for damage' },
        {
          kind: 'clauses',
          items: [
            {
              num: '4.1.',
              text:
                'In addition to the compensation cases under the GTC and the AVES Policies, if the ' +
                'Customer and/or User uses charging equipment, vehicles or batteries that are not ' +
                'permitted on the Charging Station System, or does not follow the EV Charging ' +
                'Instructions:',
              sub: [
                {
                  num: 'a.',
                  text:
                    'the Customer and/or User must compensate the Service Provider and/or third parties ' +
                    'for related losses and damage, including but not limited to costs of repair, ' +
                    'remediation and replacement, and reasonable costs incurred by the Service Provider ' +
                    'and/or third parties to avoid or mitigate losses; and',
                },
                {
                  num: 'b.',
                  text:
                    'the Service Provider may unilaterally refuse or cancel the Customer\'s and/or ' +
                    'User\'s requests to use the Charging Station Service while compensation, complaints ' +
                    'or claims are being resolved.',
                },
              ],
            },
            {
              num: '4.2.',
              text:
                'Stopping or parking a vehicle in a Charging Station area without using the Charging ' +
                'Station Service affects the Service Provider\'s business and causes it loss of revenue. ' +
                'Accordingly, the Customer and/or User agrees to pay the Service Provider compensation for ' +
                'lost revenue for each hour the vehicle is stopped or parked in the Charging Station ' +
                'area, at the rate and up to the maximum per stop published by AVES on the AVES Platform ' +
                'from time to time. The Customer and/or User acknowledges that this payment is a civil ' +
                'agreement freely entered into by the parties.',
            },
          ],
        },
      ],
    },
    {
      id: 'battery-swap-service',
      part: partB,
      title: 'II. Battery Swap Service',
      blocks: [
        { kind: 'h3', text: '1. Using the Battery Swap Service' },
        {
          kind: 'clauses',
          items: [
            {
              num: '1.1.',
              text:
                'The Customer and/or User agrees to comply with the rules set by the Service Provider ' +
                'concerning its property and the use of Battery Swap Stations, including but not limited ' +
                'to codes of conduct, parking rules and parking time limits. The Customer and/or User is ' +
                'fully responsible for any damage, fees, fines or losses resulting from failure to comply ' +
                'with any rule of the Service Provider.',
            },
            {
              num: '1.2.',
              text:
                'The Customer and/or User warrants that they own, or are authorised by the owner and/or ' +
                'the person with lawful rights over, the E-Motorbike Battery put into a Battery Swap ' +
                'Station for swapping.',
            },
            {
              num: '1.3.',
              text:
                'In an emergency or any situation threatening damage to property, injury or human life, ' +
                `the Customer and/or User must immediately call the hotline: ${phone} or the emergency ` +
                'numbers of the competent State authorities (113, 114, 115) and follow the instructions ' +
                'given.',
            },
          ],
        },
        { kind: 'h3', text: '2. Battery Swap Service fees and payment' },
        {
          kind: 'clauses',
          items: [
            {
              num: '2.1.',
              text:
                'The cost of each use of the Battery Swap Service depends on the fee shown in the App and ' +
                'the unit price published by AVES on the AVES Platform from time to time.',
            },
            {
              num: '2.2.',
              text:
                'The Customer and/or User bears all costs and risks arising while using the Battery Swap ' +
                'Service (including but not limited to the cost of taking the AVES E-Motorbike to the ' +
                'Battery Swap Station, parking fees, tolls, and personal injury and/or property damage ' +
                'incurred while entering or leaving the Battery Swap Station site and using the Battery ' +
                'Swap Service that is not caused by the Service Provider\'s intentional fault).',
            },
          ],
        },
        { kind: 'h3', text: '3. Exclusions of liability' },
        {
          kind: 'p',
          text:
            'The Service Provider may unilaterally refuse or cancel a request by the Customer and/or User ' +
            'to use the Battery Swap Service, and is not liable for any resulting damage to the Customer ' +
            'and/or User, for the following reasons:',
        },
        {
          kind: 'clauses',
          items: [
            {
              num: '3.1.',
              text:
                'the Customer\'s and/or User\'s AVES E-Motorbike has been in an accident or used in ' +
                'testing beyond the scope of normal use;',
            },
            {
              num: '3.2.',
              text:
                'there are foreign objects or unusual marks on the surface of the E-Motorbike Battery ' +
                'installed in the Customer\'s and/or User\'s AVES E-Motorbike;',
            },
            {
              num: '3.3.',
              text:
                'the Customer\'s and/or User\'s AVES E-Motorbike and/or the E-Motorbike Battery installed ' +
                'in it is not Compliant (including but not limited to a vehicle/E-Motorbike Battery that ' +
                'is damaged, a battery of unknown origin, not maintained as required and/or installed or ' +
                'repaired through channels not approved by the Service Provider or AVES);',
            },
            {
              num: '3.4.',
              text:
                'the Customer and/or User has not remedied a breach of payment obligations to AVES;',
            },
            {
              num: '3.5.',
              text:
                'the Customer and/or User breaches or fails to perform other obligations under the GTC ' +
                'and applicable law;',
            },
            { num: '3.6.', text: 'a Force Majeure Event occurs;' },
            {
              num: '3.7.',
              text:
                'for technical reasons, AVES is currently unable to provide the Battery Swap Service; or',
            },
            {
              num: '3.8.',
              text: 'other cases provided in legal documents or State policies.',
            },
          ],
        },
        { kind: 'h3', text: '4. Compensation for damage' },
        {
          kind: 'p',
          text:
            'In addition to the compensation cases under the GTC and the AVES Policies, if an E-Motorbike ' +
            'Battery is damaged, lost, misplaced or not Compliant due to the fault of the Customer and/or ' +
            'User, or because the Customer and/or User did not follow the Battery Use and Care ' +
            'Instructions:',
        },
        {
          kind: 'clauses',
          items: [
            {
              num: '4.1.',
              text:
                'the Customer and/or User must compensate the Service Provider and/or third parties for ' +
                'related losses and damage, including but not limited to costs of repairing, remedying ' +
                'and replacing E-Motorbike Batteries and Battery Swap Stations, damage resulting from ' +
                'complaints or claims relating to E-Motorbike Batteries or Battery Swap Stations ' +
                '(including reasonable legal fees), and reasonable costs incurred by the Service Provider ' +
                'to avoid or mitigate losses; and',
            },
            {
              num: '4.2.',
              text:
                'the Service Provider may unilaterally refuse or cancel the Customer\'s and/or User\'s ' +
                'requests to use the Battery Swap Service while compensation, complaints or claims are ' +
                'being resolved.',
            },
          ],
        },
      ],
    },
  ],
};
