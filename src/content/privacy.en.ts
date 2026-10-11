import { appInfo, docDate } from './appInfo';
import type { LegalDoc } from './types';

const { appName, companyLegalNameEn, supportEmail, phone, address, websiteDomain, effectiveDate } =
  appInfo;

export const privacyEn: LegalDoc = {
  title: 'Personal Data Protection Policy',
  subtitle: `Of ${companyLegalNameEn} · Applies to the ${appName} mobile application`,
  intro:
    `This Personal Data Protection Policy describes how ${companyLegalNameEn} (the "Company") ` +
    'collects, uses and processes personal data arising in the course of its operations and business. ' +
    'This English version is a translation; if it differs from the Vietnamese version, the Vietnamese ' +
    'version prevails.',
  sections: [
    {
      id: 'general',
      title: '1. General provisions',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '1.1.',
              title: 'Personal Data:',
              text:
                'information in the form of symbols, text, numbers, images, sounds or similar in an ' +
                'electronic environment that is associated with, or helps identify, a specific person. ' +
                'Personal Data includes basic Personal Data and sensitive Personal Data.',
            },
            {
              num: '1.2.',
              title: 'Data Subject:',
              text:
                'the individual reflected by the Personal Data, including all individual customers using ' +
                'the Company\'s products and services, the Company\'s employees and shareholders, and/or ' +
                'other individuals who have a legal relationship with the Company.',
            },
            {
              num: '1.3.',
              title: 'Processing of Personal Data:',
              text:
                'one or more operations affecting Personal Data, such as collecting, recording, ' +
                'analysing, confirming, storing, editing, disclosing, combining, accessing, retrieving, ' +
                'recovering, encrypting, decrypting, copying, sharing, transmitting, providing, ' +
                'transferring, deleting or destroying Personal Data, or other related actions.',
            },
            {
              num: '1.4.',
              text:
                'When Personal Data of persons related to a Data Subject (including but not limited to ' +
                'dependants, related persons under the law, spouses, children and/or parents and/or ' +
                'guardians, friends, beneficiaries, authorised persons, partners, emergency contacts or ' +
                'other individuals connected with the Data Subject) is provided to the Company, the Data ' +
                'Subject and the related person represent, warrant and are responsible for ensuring that ' +
                'the information has been provided in full and that the related person has lawfully ' +
                'consented to its processing for the purposes set out in this Policy. They agree that ' +
                'the Company has no responsibility to verify the lawfulness or validity of that consent, ' +
                'and that keeping evidence of it is their responsibility. The Company is released from ' +
                'liability and may claim compensation for related damage and costs if the Data Subject ' +
                'and/or related person fails to comply with this clause.',
            },
            {
              num: '1.5.',
              text:
                'By registering for or using the Company\'s products and services, entering into a ' +
                'contract and/or allowing the Company to process Personal Data, the Data Subject accepts ' +
                'in full and without condition the policies set out here and any changes to them from ' +
                'time to time.',
            },
            {
              num: '1.6.',
              text:
                'The Company may update, amend, supplement or replace this Policy from time to time and ' +
                `will publish it on the Company's official website (${websiteDomain}). Please visit our ` +
                'website regularly to stay informed of the latest changes.',
            },
            {
              num: '1.7.',
              text: 'The Company commits to the following principles when processing Personal Data:',
              sub: [
                {
                  text:
                    'The Company processes and protects Personal Data in accordance with Vietnamese law ' +
                    'and in full compliance with contracts, agreements and other instruments entered ' +
                    'into with the Data Subject;',
                },
                {
                  text:
                    'The Company collects Personal Data for specific, clear and lawful purposes within ' +
                    'the scope of the purposes in Section 3 of this Policy and in accordance with ' +
                    'Vietnamese law;',
                },
                {
                  text:
                    'The Company applies and keeps up to date technical measures in line with Vietnamese ' +
                    'law to keep Personal Data secure, including protection against unauthorised access ' +
                    'and/or destruction, loss of or damage to Personal Data;',
                },
                {
                  text:
                    'The Company stores Personal Data appropriately and only to the extent necessary for ' +
                    'processing in accordance with Vietnamese law;',
                },
                { text: 'The Company complies with the rules on protecting children\'s data.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'data-processed',
      title: '2. Personal data processed',
      blocks: [
        {
          kind: 'p',
          text:
            'To process Personal Data for the purposes in Section 3 of this Policy, the Company may ' +
            'process the following types of Personal Data:',
        },
        {
          kind: 'list',
          items: [
            'Full name, email, phone number, profile photo, password, face, fingerprint, location;',
            'Vehicle name, VIN/serial number, model, lock status, battery level, battery state of health (SOH), charging schedule;',
            'The vehicle\'s BLE device identifier, scan results, connection logs;',
            'Audio clips when you activate voice control;',
            'Names and phone numbers of contacts you enter yourself;',
            'Email or phone number of people you invite, invitation status, vehicle access rights;',
            'Device model, operating system version, app version, push notification token, crash logs;',
            'Aggregated in-app events: screens viewed, features used.',
          ],
        },
      ],
    },
    {
      id: 'purposes',
      title: '3. Purposes of processing',
      blocks: [
        { kind: 'p', text: 'Personal Data may be processed for one or more of the following purposes:' },
        {
          kind: 'clauses',
          items: [
            {
              num: '3.1.',
              text:
                'Assessing the ability to provide products and services and/or enter into contracts with ' +
                'the Data Subject, including but not limited to:',
              sub: [
                { text: 'identifying and verifying information about the Data Subject;' },
                {
                  text:
                    'assessing, appraising and approving the provision of products and services based on ' +
                    'registrations, applications and contracts of the Data Subject and/or related persons;',
                },
                {
                  text:
                    'considering whether to provide or continue providing any of the Company\'s products ' +
                    'and services to the Data Subject.',
                },
              ],
            },
            {
              num: '3.2.',
              text:
                'Performing obligations under contracts, agreements, terms, conditions and other ' +
                'instruments between the Company and the Data Subject, and supporting customers, ' +
                'including but not limited to:',
              sub: [
                {
                  text:
                    'performing contractual obligations and providing products and services to the Data ' +
                    'Subject;',
                },
                { text: 'updating and processing the Data Subject\'s information;' },
                { text: 'providing care and resolving the Data Subject\'s complaints and claims;' },
                {
                  text:
                    'using Personal Data and related information, and transferring it to partners, to ' +
                    'identify and fix product and service issues and to repair products;',
                },
                { text: 'contacting and notifying the Data Subject;' },
                { text: 'running promotions, gift redemptions, rewards and gift deliveries;' },
                { text: 'other customer care and support activities.' },
              ],
            },
            {
              num: '3.3.',
              text:
                'Improving the quality of the Company\'s products and services, including but not ' +
                'limited to:',
              sub: [
                {
                  text:
                    'providing information customers have requested or that the Company considers useful ' +
                    'to them;',
                },
                {
                  text:
                    'improving technology and the interfaces of websites, social media and apps for ' +
                    'customers\' convenience;',
                },
                { text: 'managing customer accounts and loyalty programmes run by the Company;' },
                {
                  text:
                    'compiling statistics and analysing data to research, build, develop and improve ' +
                    'products and services and enhance customer experience;',
                },
                {
                  text:
                    'developing and offering new products and services personalised to customers\' needs ' +
                    'and circumstances;',
                },
                {
                  text:
                    'introducing promotions and offers for products and services of the Company and of ' +
                    'the Company together with its partners;',
                },
                {
                  text:
                    'recommending products and services customers may be interested in, based on their ' +
                    'preferences.',
                },
              ],
            },
            {
              num: '3.4.',
              text:
                'Supporting the Company\'s business and operations, including but not limited to ' +
                'reporting, financial, accounting and tax obligations, audit and compliance activities, ' +
                'and other activities for the Company\'s lawful business where the Company considers it ' +
                'necessary.',
            },
            {
              num: '3.5.',
              title: 'Restructuring and transfer of projects or businesses:',
              text:
                'In the course of business, the Company may sell or buy businesses, restructure, or ' +
                'transfer projects or other services in accordance with the law. Personal Data and the ' +
                'right to use information in general may be among the assets transferred. In all cases, ' +
                'the transfer and processing of data will be carried out by the parties in accordance ' +
                'with the law and this Policy.',
            },
            {
              num: '3.6.',
              title: 'Marketing:',
              text:
                'building marketing and promotional campaigns for products and services, including ' +
                'campaigns based on customer preferences.',
            },
            { num: '3.7.', text: 'Preventing, combating, investigating and detecting crime.' },
            {
              num: '3.8.',
              text:
                'Protecting social order and safety and the lawful rights and interests of the Data ' +
                'Subject, the Company and other related parties.',
            },
            {
              num: '3.9.',
              text:
                'Complying with the law and international treaties to which Vietnam is a party, ' +
                'including but not limited to:',
              sub: [
                { text: 'providing data to competent State authorities as required by law;' },
                {
                  text:
                    'performing obligations under the law and international treaties the Company must ' +
                    'comply with (if any).',
                },
              ],
            },
            { num: '3.10.', text: 'Other purposes with the Data Subject\'s consent.' },
          ],
        },
      ],
    },
    {
      id: 'how-processed',
      title: '4. How personal data is processed',
      blocks: [
        { kind: 'h3', text: '4.1. Collection' },
        { kind: 'p', text: 'Personal Data is collected as follows:' },
        {
          kind: 'clauses',
          items: [
            {
              title: 'From the Company\'s websites and apps:',
              text:
                'Personal Data is collected when the Data Subject fills in forms on the Company\'s ' +
                'websites and apps.',
            },
            {
              title:
                'From providing products and services and performing the Company\'s contracts and ' +
                'agreements:',
              text:
                'Personal Data is collected when the Data Subject buys, registers for or uses any ' +
                'product or service, or signs a contract with the Company.',
            },
            {
              title: 'From communications with the Data Subject:',
              text:
                'Personal Data is collected through interactions between the Company and the Data ' +
                'Subject (in person, by letter, phone, online, call centre, electronic communication or ' +
                'any other means), including surveys.',
            },
            {
              title: 'From social media:',
              text:
                'the Company\'s own social media channels and/or social media channels run with partners.',
            },
            {
              title: 'From audio and video recording devices:',
              text:
                'installed at stores, business locations or places where the Company carries out all or ' +
                'part of its business, where the Data Subject meets, appears or interacts with the ' +
                'Company.',
            },
            {
              title: 'From interactions or automatic data collection technologies:',
              text: 'the Company may collect information recorded automatically from connections via:',
              sub: [
                { text: 'cookies, pixel tags and similar technologies;' },
                {
                  text:
                    'any technology capable of tracking personal activity on devices or websites;',
                },
                { text: 'other data provided by a device.' },
              ],
            },
            {
              title: 'Other means:',
              text:
                'the Company may collect Personal Data from public and official sources, or receive ' +
                'necessary data shared by its parent company, subsidiaries, affiliates and partners in ' +
                'the course of cooperation, in accordance with the law.',
            },
          ],
        },
        { kind: 'h3', text: '4.2. Storage' },
        {
          kind: 'p',
          text:
            'Personal Data is stored in Vietnam in the Company\'s database systems, or wherever we or our ' +
            'branches, subsidiaries, affiliates, partners or service providers have facilities.',
        },
        {
          kind: 'p',
          text:
            'The retention period for personal data is determined by the purposes of use set out in this ' +
            'Policy and in accordance with the law.',
        },
        { kind: 'h3', text: '4.3. Transfer and sharing' },
        {
          kind: 'p',
          text:
            'The Company will not sell Personal Data to anyone. The Company uses the necessary security ' +
            'measures to keep the transfer and sharing of Personal Data safe. Personal Data is shared ' +
            'with (i) the Company\'s parent company, subsidiaries and affiliates; (ii) individuals and ' +
            'organisations involved in processing Personal Data as described in this Policy; or (iii) ' +
            'competent State authorities, or in other cases permitted by law.',
        },
        {
          kind: 'p',
          text:
            'If a recipient of Personal Data is based outside Vietnam, when providing or transferring ' +
            'Personal Data abroad (including but not limited to using cyberspace, devices, electronic ' +
            'means or other forms to transfer Personal Data out of Vietnam), the Company will require the ' +
            'recipient to keep the Personal Data safe and confidential. The Company commits to full ' +
            'compliance with Vietnamese legal requirements to protect Personal Data.',
        },
        { kind: 'h3', text: '4.4. Analysis' },
        {
          kind: 'p',
          text:
            'Personal Data is analysed according to the Company\'s internal procedures, data ' +
            'confidentiality principles and information security requirements for its IT systems.',
        },
        { kind: 'h3', text: '4.5. Encryption' },
        {
          kind: 'p',
          text:
            'Where necessary, collected Personal Data is encrypted to appropriate standards during ' +
            'storage, transfer and processing so that the data remains protected.',
        },
        { kind: 'h3', text: '4.6. Deletion' },
        {
          kind: 'p',
          text:
            'As required by law or upon a valid request from the Data Subject, the Company will delete ' +
            'stored Personal Data except where:',
        },
        {
          kind: 'list',
          items: [
            'the law does not permit deletion or requires the data to be retained;',
            'the Personal Data is processed by a competent State authority for its official activities as provided by law;',
            'the Personal Data has been made public in accordance with the law;',
            'the Personal Data is processed for legal requirements, scientific research or statistics as provided by law;',
            'there is a state of emergency concerning national defence, national security, social order and safety, a major disaster or a dangerous epidemic; there is a threat to security or defence that does not yet warrant declaring a state of emergency; or for preventing and combating riots, terrorism, crime and violations of the law;',
            'responding to an emergency that threatens the life, health or safety of the Data Subject or another person.',
          ],
        },
        {
          kind: 'p',
          text:
            'Throughout the processing of Personal Data, security is the Company\'s highest priority. The ' +
            'Company has appropriate technical measures to prevent unauthorised access to and use of ' +
            'Personal Data, and regularly works with security experts to keep up with the latest ' +
            'cybersecurity techniques. Payment card data issued by financial institutions is protected ' +
            'on the principle that the Company does not record critical card data (card number, ' +
            'cardholder name, CVV) on its systems. Your payment transactions are carried out on the ' +
            'systems of the relevant bank.',
        },
      ],
    },
    {
      id: 'children',
      title: '5. Processing children\'s personal data',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '5.1.',
              text:
                'The Company processes children\'s Personal Data on the principle of protecting their ' +
                'rights and best interests and in accordance with the law.',
            },
            {
              num: '5.2.',
              text:
                'The Company processes children\'s Personal Data and provides products and services to ' +
                'children only if a parent or guardian agrees to the child using the Company\'s products ' +
                'and services, agrees to the Company processing the child\'s Personal Data, agrees to ' +
                'this Policy, and complies with the relevant legal requirements. Where a child aged 7 or ' +
                'over uses the Company\'s products and services, the Company, in addition to the above, ' +
                'processes the child\'s Personal Data only with that child\'s consent. Parents or ' +
                'guardians are responsible for obtaining the child\'s consent before providing the ' +
                'child\'s Personal Data to the Company.',
            },
          ],
        },
      ],
    },
    {
      id: 'risks',
      title: '6. Possible unintended consequences and damage',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '6.1.',
              text:
                'The Company uses various information security technologies, such as firewalls, access ' +
                'controls and encryption, to protect Personal Data and prevent unauthorised access, use ' +
                'or sharing. However, the Company cannot guarantee absolute security of Personal Data in ' +
                'cases such as:',
              sub: [
                {
                  text:
                    'hardware or software failures during data processing that cause loss of the Data ' +
                    'Subject\'s data;',
                },
                {
                  text:
                    'security vulnerabilities beyond the Company\'s control, or hacker attacks causing ' +
                    'data leaks.',
                },
              ],
            },
            {
              num: '6.2.',
              text:
                'The Company recommends that Data Subjects keep their account login passwords and OTP ' +
                'codes secure and never share them with anyone.',
            },
            {
              num: '6.3.',
              text:
                'Data Subjects should be aware that whenever they disclose or publish their own Personal ' +
                'Data, it may be collected and used by others for purposes beyond the control of the Data ' +
                'Subject and the Company.',
            },
            {
              num: '6.4.',
              text:
                'The Company recommends that Data Subjects keep their personal devices (phones, tablets, ' +
                'computers, etc.) safe while in use, and log out of their accounts when not in use.',
            },
            {
              num: '6.5.',
              text:
                'If a data storage server is attacked, resulting in loss or leakage of Personal Data, the ' +
                'Company will promptly report the incident to the competent authorities for ' +
                'investigation and notify the Data Subject as required by law.',
            },
            {
              num: '6.6.',
              text:
                'Cyberspace is not a secure environment and the Company cannot fully guarantee that ' +
                'Personal Data shared over it will always remain confidential. When transmitting Personal ' +
                'Data online, Data Subjects should use only secure systems to access websites, apps or ' +
                'devices, and are responsible for keeping their access credentials for each website, app ' +
                'or device safe and secret.',
            },
          ],
        },
      ],
    },
    {
      id: 'processing-period',
      title: '7. Start and end of processing',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '7.1.',
              text:
                'Personal Data is processed from the time the Company lawfully receives it and has an ' +
                'appropriate legal basis to process it under the law.',
            },
            {
              num: '7.2.',
              text: 'Personal Data is processed until the purposes of processing have been fulfilled.',
            },
            {
              num: '7.3.',
              text:
                'The Company may need to retain Personal Data even after the contract between the ' +
                'parties has ended, in order to meet legal obligations and/or requests from competent ' +
                'State authorities.',
            },
          ],
        },
      ],
    },
    {
      id: 'parties',
      title: '8. Organisations and individuals involved in processing',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '8.1.',
              text:
                'Depending on the case, the Company may act as the personal data controller or as the ' +
                'personal data controller and processor.',
            },
            {
              num: '8.2.',
              text:
                'To the extent permitted by law, the Data Subject understands that the Company may share ' +
                'Personal Data for the purposes in this Policy with the following organisations and ' +
                'individuals:',
              sub: [
                { text: 'the Company\'s parent company, subsidiaries and affiliates;' },
                {
                  text:
                    'organisations and individuals that provide services to and/or cooperate with the ' +
                    'Company, including but not limited to agents, auditors, lawyers, business partners, ' +
                    'and providers of IT solutions, software, applications, operations, management, ' +
                    'incident handling and infrastructure development services;',
                },
                {
                  text:
                    'any individual or organisation that represents or is authorised by the Data Subject ' +
                    'and acts on their behalf.',
                },
              ],
            },
          ],
        },
        {
          kind: 'p',
          text:
            'Data sharing is carried out in accordance with the applicable procedures, methods and laws. ' +
            'Recipients of Personal Data must keep it confidential in line with this Policy, the ' +
            'Company\'s internal rules and Personal Data protection standards, and applicable law.',
        },
        {
          kind: 'clauses',
          items: [
            {
              num: '8.3.',
              text:
                'The Company may be required to share Personal Data with competent State authorities as ' +
                'provided by law.',
            },
          ],
        },
      ],
    },
    {
      id: 'rights',
      title: '9. Rights of the data subject',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '9.1.',
              text:
                'The right to be informed about the processing of their Personal Data, unless the law ' +
                'provides otherwise.',
            },
            {
              num: '9.2.',
              text:
                'The right to consent or not consent to the processing of their Personal Data, unless the ' +
                'law provides otherwise.',
            },
            {
              num: '9.3.',
              text:
                'The right to access, view, correct or request correction of their Personal Data, unless ' +
                'the law provides otherwise.',
            },
            { num: '9.4.', text: 'The right to withdraw consent.' },
            { num: '9.5.', text: 'The right to deletion of data.' },
            {
              num: '9.6.',
              text: 'The right to restrict processing of their Personal Data as provided by law.',
            },
            {
              num: '9.7.',
              text:
                'The right to request a copy of their own Personal Data, unless the law provides ' +
                'otherwise.',
            },
            { num: '9.8.', text: 'The right to object to data processing.' },
            { num: '9.9.', text: 'The right to complain, denounce and bring legal action.' },
            { num: '9.10.', text: 'The right to claim compensation for damage.' },
            { num: '9.11.', text: 'The right to self-protection.' },
          ],
        },
        {
          kind: 'p',
          text:
            'Data Subjects may exercise these rights by submitting a request to the Company. The request ' +
            'must include basic details such as the requester\'s information, the detailed request (for ' +
            'example the type of data to be provided or deleted, and the names of documents or records, ' +
            'if any), the reason and purpose of the request, and other relevant information depending on ' +
            'the request (for example whether documents are needed as files or on paper, and the delivery ' +
            'address). Any costs of fulfilling such requests, including but not limited to printing, ' +
            'copying, postage and courier fees for sending the data, are borne by the requester and must ' +
            'be paid no later than on receipt of the data or by a deadline set by the Company.',
        },
        {
          kind: 'p',
          text:
            'The Company will handle Data Subject requests in accordance with the law and with due regard ' +
            'to the Data Subject\'s legitimate interests. However, if a Data Subject withdraws consent, ' +
            'requests deletion and/or exercises other rights over any or all Personal Data in a way that ' +
            'affects the Company\'s ability to provide or maintain its products and services or the ' +
            'contractual relationship, the Company may, depending on the nature of the request, decide to ' +
            'stop providing its products and services to the Data Subject or to terminate the contractual ' +
            'relationship. Such actions by the Data Subject are deemed a unilateral termination by the ' +
            'Data Subject of any relationship with the Company and may constitute a breach of contractual ' +
            'obligations or commitments, and the Company reserves its lawful rights and remedies in such ' +
            'cases. Accordingly, the Company is not liable to the Data Subject for any resulting loss, and ' +
            'its lawful rights are fully reserved. Using reasonable efforts, the Company will fulfil lawful ' +
            'and valid requests from Data Subjects within the time required by law. For security reasons, ' +
            'the Company may ask the Data Subject to verify their identity before processing a request.',
        },
        {
          kind: 'p',
          text:
            'The Company may refuse a Data Subject\'s request in certain cases, including but not limited ' +
            'to where: (i) the Data Subject does not follow the procedure set out by the Company, or the ' +
            'request is incomplete or invalid; (ii) the Data Subject does not provide, or provides ' +
            'incomplete, documents to verify their identity; (iii) the Company identifies signs of fraud ' +
            'or a breach of Personal Data protection; or (iv) the law does not permit the request to be ' +
            'fulfilled.',
        },
      ],
    },
    {
      id: 'obligations',
      title: '10. Obligations of the data subject',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '10.1.',
              text:
                'Protect their own Personal Data and require other relevant organisations and individuals ' +
                'to protect it. Promptly notify the Company on discovering errors, mistakes or leaks of ' +
                'Personal Data, or on suspecting that Personal Data has been compromised.',
            },
            { num: '10.2.', text: 'Respect and protect the personal data of others.' },
            {
              num: '10.3.',
              text:
                'Provide complete and accurate Personal Data when consenting to its processing. If any ' +
                'information is inaccurate, the Data Subject bears the consequences at their own cost ' +
                'where that information affects or limits their own interests.',
            },
            {
              num: '10.4.',
              text:
                'Comply with the law on personal data protection and help prevent and combat violations ' +
                'of personal data protection rules.',
            },
            { num: '10.5.', text: 'Other responsibilities as provided by law.' },
          ],
        },
      ],
    },
    {
      id: 'vulnerable-consumers',
      title: '11. Protecting vulnerable consumers',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '11.1.',
              text:
                'Where a Customer belongs to a group of vulnerable consumers under applicable law, the ' +
                'processing of their Personal Data must be carried out carefully and appropriately, with ' +
                'enhanced protection, to safeguard their lawful rights and interests.',
            },
            {
              num: '11.2.',
              text:
                'Where necessary to receive and handle a Customer\'s request, the Company may collect ' +
                'relevant information and documents to determine whether the Customer is a vulnerable ' +
                'consumer, on the basis that:',
              sub: [
                { text: 'collection is limited to what is necessary;' },
                { text: 'data is used only to receive and handle the request;' },
                { text: 'appropriate security measures are applied to the resulting Personal Data;' },
                {
                  text:
                    'where the Customer\'s rights are infringed and the Customer requests protection, the ' +
                    'staff member receiving the request must forward it to the level authorised to handle ' +
                    'complaints under the Company\'s rules in force at the time, so that the Customer is ' +
                    'supported, served and answered as quickly as possible;',
                },
                {
                  text:
                    'the Company prioritises receiving and handling requests from vulnerable consumers ' +
                    'over requests from other Customers.',
                },
              ],
            },
            {
              num: '11.3.',
              text:
                'Processing Personal Data of children and of persons who have lost or have limited civil ' +
                'act capacity:',
              sub: [
                {
                  num: '11.3.1.',
                  text:
                    'The Company processes Personal Data only to the extent necessary to protect the ' +
                    'lawful rights, interests and safety of these persons, for example to:',
                  sub: [
                    {
                      text:
                        'help children or vulnerable persons access and use services and facilities;',
                    },
                    {
                      text:
                        'ensure security, safety and an appropriate, friendly environment for providing ' +
                        'services and products;',
                    },
                    { text: 'fulfil necessary obligations under the law.' },
                  ],
                },
                {
                  num: '11.3.2.',
                  text:
                    'Where the law requires consent to the processing of Personal Data, consent is given ' +
                    'by the legal representative on behalf of the child or the person without full civil ' +
                    'act capacity, unless the law provides otherwise. For children aged 7 or over, if the ' +
                    'processing involves publishing or disclosing information about private life or ' +
                    'personal secrets, the Company does so only with the consent of both the child and ' +
                    'their legal representative.',
                },
              ],
            },
            {
              num: '11.4.',
              text:
                'If the Company refuses to handle a Customer\'s request, it will respond in writing, ' +
                'stating the legal basis and why the request is not appropriate.',
            },
          ],
        },
      ],
    },
    {
      id: 'other',
      title: '12. Other provisions',
      blocks: [
        {
          kind: 'clauses',
          items: [
            {
              num: '12.1.',
              text:
                'By accepting this Policy, the Data Subject confirms that they consent to their Personal ' +
                'Data being processed by the Company and the organisations and individuals involved in ' +
                'processing as described in this Policy, and that they understand the types of data ' +
                'processed, the purposes of processing, who processes it, and their rights and ' +
                'obligations regarding their Personal Data. The Data Subject has been informed of, ' +
                'understands and agrees to all matters that must be notified before their Personal Data ' +
                'is processed, and agrees that the Company and the organisations and individuals involved ' +
                'need not notify them again before processing.',
            },
            {
              num: '12.2.',
              text:
                'If you have any questions about the Company\'s personal data protection, please contact ' +
                'us and we will do our best to answer as soon as possible. You can also reach us at:',
              sub: [
                { title: 'Address:', text: address },
                { title: 'Email:', text: supportEmail },
                { title: 'Phone:', text: phone },
              ],
            },
            {
              num: '12.3.',
              text: `This Policy applies from ${docDate(effectiveDate)}.`,
            },
          ],
        },
      ],
    },
  ],
};
