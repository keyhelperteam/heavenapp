'use client';
import React from 'react'

interface PolicySection {
  title: string;
  items?: string[];
  subItems?: { prefix: string; text: string }[];
  content?: string;
  contactEmail?: boolean;
}

const privacySections: PolicySection[] = [
  {
    title: '1. Information we Collect',
    items: [
      'Heaven receives or collects information when we operate and provide our Services, including when you install, access, or use our Services.',
    ],
    subItems: [
      { prefix: '1.1', text: 'Information you provide' },
      { prefix: '(i)', text: 'Your Account Information: You provide your email address to create a Heaven account. You provide us the email in your email address book on a regular basis, including those of both the users of our Services and your other contacts. You confirm you are authorised to provide us such emails. You may also add other information to your account, such as a profile name, profile picture, and status message.' },
      { prefix: '(ii)', text: 'Your Messages: We will retain your messages for a period of 365 days in the ordinary course of providing our Services to you ("Retention Period"). Once your messages (including your chats, photos, videos, voice messages, files) are delivered, they will be retained for the Retention Period. After the Retention Period, your messages will be deleted unless such messages are stored on our servers for legal and/or business purposes in compliance with applicable laws.' },
      { prefix: '(iii)', text: 'Your Connections: To help you organise how you communicate with others, you can create, join or get added to groups, and such groups get associated with your account information.' },
      { prefix: '(iv)', text: 'Customer Support: You may provide us with information related to your use of our Services, including copies of your messages, and how to contact you so we can provide you customer support. For example, you may send us an email with information relating to our app performance or other issues.' },
    ],
  },
  {
    title: '2. How we use Information',
    items: [
      'We use all the information we have to help us operate, provide, improve, understand, customise, support and market our Services.',
    ],
    subItems: [
      { prefix: '2.1', text: 'Our Services: We operate and provide our Services, including providing customer support, and improving, fixing, and customising our Services. We understand how people use our Services, and analyse and use the information we have to evaluate and improve our Services, research, develop, and test new services and features, and conduct troubleshooting activities. We also use your information to respond to you when you contact us. We use cookies to operate, provide, improve, understand, and customize our Services.' },
      { prefix: '2.2', text: 'Safety and Security: We verify accounts and activity, and promote safety and security on and off our Services, such as by investigating suspicious activity or violations of our Terms, and to ensure our Services are being used legally.' },
      { prefix: '2.3', text: 'Communications About our Services: We communicate with you about our Services and features and let you know about our terms and policies and other important updates.' },
      { prefix: '2.4', text: 'General terms in relation to tracking technologies: We may from time to time partner with third party partners to display their advertising or to manage our advertising on other sites. Our third party partners may use cookies or other tracking technologies in order to provide you with advertising based on your browsing activities and interests. Please note all such third party tracking technologies are governed by the relevant third party\u2019s own privacy policy, and we are not responsible for such third party tracking technologies (including information collected by the relevant third party using such third party tracking technologies). While we may have agreements in place with these third parties in relation to the proper handling and protection of your information, we cannot guarantee their privacy practices as they are third parties.' },
      { prefix: '2.5', text: 'Commercial Messaging: We may allow you and third parties, like businesses, to communicate with each other using Heaven, such as through order, transaction, and appointment information, delivery and shipping notifications, product and service updates, and marketing. For example, you may receive flight status information for upcoming travel, a receipt for something you purchased, or a notification when a delivery will be made. Messages you may receive containing marketing could include an offer for something that might interest you. We do not want you to experience spam messaging; as with all of your messages, you can manage and block these communications.' },
    ],
  },
  {
    title: '3. Information You and We Share',
    items: [
      'You share your information as you use and communicate through our Services, and we share your information to help us operate, provide, improve, understand, customise, support, and market our Services.',
    ],
    subItems: [
      { prefix: '3.1', text: 'Account Information: Your email, phone number, profile name and photo, online status and status message, last seen status, and receipts may be available to anyone who uses our Services, although you can configure your Services settings to manage certain information available to other users.' },
      { prefix: '3.2', text: 'Your Contacts and Others: Users with whom you communicate may store or re-share your information (including your phone number or messages) with others on and off our Services.' },
      { prefix: '3.3', text: 'Third-Party Providers: We work with third-party providers to help us operate, provide, improve, understand, customise, support, and market our Services. When we share information with third-party providers, we require them to use your information in accordance with our instructions and terms or with express permission from you.' },
      { prefix: '3.4', text: 'Third-Party Services: When you use third-party services that are integrated with our Services, they may receive information about what you share with them. For example, if you interact with a third-party service linked through our Services, you may be providing information directly to such third party. Please note that when you use third-party services, their own terms and privacy policies will govern your use of those services.' },
      { prefix: '3.5', text: 'Location-based Services: Our mapping and location-based services (such as "Scan Note within 1km" and "Post Note") may require information about your location in order for us to provide our Services.' },
    ],
  },
  {
    title: '4. Affiliated Companies',
    items: [
      '4.1 You consent to Heaven sharing information with its group companies, comprising all related entities and affiliates of Heaven ("Group Companies"). You consent to any Group Company, using the information Heaven shares with them, to help operate, provide, improve, understand, customise and support our Services. This includes helping improve infrastructure and delivery systems, understanding how our Services are used, securing systems, and fighting spam, abuse, or infringement activities.',
    ],
  },
  {
    title: '5. Assignment, Change of Control, and Transfer',
    items: [
      '5.1 You acknowledge and consent that all of our rights and obligations under our Privacy Policy are freely assignable by us to any of our affiliates, in connection with a merger, acquisition, restructuring, or sale of assets, or by operation of law or otherwise, and we may transfer your information to any of our affiliates, successor entities, or new owner for the purpose of providing the Services.',
    ],
  },
  {
    title: '6. Managing your Information',
    items: [
      'If you would like to manage, change, limit or delete your information, we allow you to do that through the following tools:',
    ],
    subItems: [
      { prefix: '6.1', text: 'Services Settings: You can change your Services settings to manage certain information available to other users. You can manage your contacts and groups, or use our block feature to manage the users with whom you communicate.' },
      { prefix: '6.2', text: 'Changing your Profile Name, Picture, and Status Message: You may change your profile name, profile picture, and status message at any time.' },
      { prefix: '6.3', text: 'Account deactivation or anonymisation: Your Heaven account is linked to your email address. If you should cease to use a particular email to your information, you can email to Heaven for now. In the meantime, Heaven is working a methods for deactivating or anonymising your account \u2013 please refer to Heaven for tips on how to do so (if available) from time to time.' },
    ],
  },
  {
    title: '7. Law and Protection',
    items: [
      '7.1 We may collect, use, preserve, and share your information if we have a good-faith belief that it is reasonably necessary to: (a) respond pursuant to applicable law or regulations, to legal process, or to government requests; (b) enforce our Terms and any other applicable terms and policies, including for investigations of potential violations; (c) detect, investigate, prevent, and address fraud and other illegal activity, security, or technical issues; or (d) to protect the rights, property, and safety of our users, Heaven, our Group Companies, or others.',
    ],
  },
  {
    title: '8. Our Operations',
    items: [
      '8.1 You agree to our information practices, including the collection, use, processing, and sharing of your information as described in this Privacy Policy, as well as the transfer and processing of your information to other countries globally where we have or use facilities, service providers, or partners, regardless of where you use our Services. You acknowledge that the laws, regulations, and standards of the country in which your information is stored or processed may be different from those of your own country.',
    ],
  },
  {
    title: '9. Updates to our Policy',
    items: [
      '9.1 We may amend or update our Privacy Policy. We will provide you notice of amendments to this Privacy Policy, as appropriate, and update the "Last Modified" date at the top of this Privacy Policy. Your continued use of our Services confirms your acceptance of our Privacy Policy, as amended. If you do not agree to our Privacy Policy, as amended, you must stop using our Services. Please review our Privacy Policy from time to time.',
    ],
  },
  {
    title: '10. Contact us',
    content: '10.1 If you have any questions about our Privacy Policy, please contact us.',
    contactEmail: true,
  },
];

const PrivacyAndPolicy = () => {
  return (
    <div className='min-h-screen pt-[12vh] bg-white'>
      <div className='w-[90%] mx-auto py-16'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
            Privacy & Policy
          </h1>
          <p className='text-gray-600 text-lg'>Last amended on 09 June 2025</p>
        </div>

        <div className='max-w-4xl mx-auto text-gray-700'>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>Heaven PRIVACY POLICY</h3>
          <p className='mb-4'>
            We respect your privacy. This Privacy Policy (&ldquo;Privacy Policy&rdquo;) applies to all of our apps, services, features, software, and website (collectively &ldquo;Services&rdquo;), unless specified otherwise. This Privacy Policy helps to explain our information (including message) practices.
          </p>
          <p className='mb-6'>
            This Privacy Policy is incorporated into and forms part of the Heaven Terms of Service (&ldquo;Terms&rdquo;) that you have agreed to in order to use Heaven. Any terms used in this Privacy Policy will have the same meaning as the equivalent defined terms in the Heaven Terms of Service, unless otherwise defined in this Privacy Policy or the context requires otherwise. Please note that this Privacy Policy does not apply to Information collected: (a) through any services other than Heaven; (b) through any third party services (including any third party websites) that you may access through Heaven; or (c) by other companies and organisations who advertise their services on Heaven.
          </p>

          {privacySections.map((section, index) => (
            <div key={index} className='mb-6'>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>{section.title}</h4>
              {section.content && (
                <p className='mb-2'>{section.content}</p>
              )}
              {section.contactEmail && (
                <p className='ml-6'>
                  <a href="mailto:heavenappteam@gmail.com" className='text-amber-600'>heavenappteam@gmail.com</a>
                </p>
              )}
              {section.items && section.items.map((item, itemIndex) => (
                <p key={itemIndex} className='ml-6 mb-2'>{item}</p>
              ))}
              {section.subItems && section.subItems.map((item, itemIndex) => (
                <p key={itemIndex} className='ml-8 mb-2'>
                  {item.prefix && <strong>{item.prefix}{' '}</strong>}
                  {item.text}
                </p>
              ))}
            </div>
          ))}

          <h3 className='text-lg font-bold text-gray-900 mt-8'>Last amended on 09 June 2025</h3>
        </div>
      </div>
    </div>
  )
}

export default PrivacyAndPolicy
