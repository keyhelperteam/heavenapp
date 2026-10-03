'use client';
import React from 'react'

interface TermItem {
  prefix?: string;
  text: string;
  isBold?: boolean;
}

interface TermSection {
  title: string;
  items?: TermItem[];
  content?: string;
}

const termsSections: TermSection[] = [
  {
    title: '1. About our Services',
    items: [
      { prefix: '1.1', text: 'Registration: You must register for our Services using accurate data, provide your current email address. You agree to receive activation email (from us or our third-party providers) to register for our Services.' },
      { prefix: '1.2', text: 'Ownership of account: Any account that you open with us is personal to you and you are prohibited from gifting, lending, transferring or otherwise permitting any other person to access or use your account. Your account name, user ID and other identifiers you adopt within Heaven remains our property and we can disable, reclaim and reuse these once your account is terminated or deactivated for whatever reason by either you or us.' },
      { prefix: '1.3', text: 'Safeguarding of account details: You are responsible for: (i) safeguarding your account details, including any passwords used to access your account and Heaven, and (ii) all use of Heaven under your account. You must promptly notify us at by submitting a report at heavenappteam@gmail.com if you know or suspect that your password or account has been compromised. We will regard all use of your account on Heaven as being by you, except where we have received and acknowledged your notification to us regarding your account/password being compromised.' },
      { prefix: '1.4', text: 'Address Book: You provide us the email address of Heaven users and your other contacts in your email address on a regular basis. You confirm you are authorised to provide us such emails to allow us to provide our Services.' },
      { prefix: '1.5', text: 'Age: You must be at least 13 years old to use our Services (or such greater age required in your country for you to be authorised to use our Services without parental approval). In addition to being of the minimum required age to use our Services under applicable law, if you are not old enough to have authority to agree to our Terms, your parent or guardian must agree to our Terms on your behalf.' },
      { prefix: '1.6', text: 'Devices and Software: You must provide certain devices, software and data connections to use our Services, which we otherwise do not supply. For as long as you use our Services, you consent to downloading and installing updates to our Services, including automatically.' },
      { prefix: '1.7', text: 'Fees and Taxes: You are responsible for all carrier data plan and other fees and taxes associated with your use of our Services. We may charge you for our Services, including applicable taxes. We do not provide refunds for our Services, except as required by law.' },
      { prefix: '1.8', text: 'Account deactivation or anonymisation: Your Heaven account is linked to your email address. If you should cease to use a particular email to your information, you can email to Heaven for now. In the meantime, Heaven is working a methods for deactivating or anonymising your account – please refer to Heaven for tips on how to do so (if available) from time to time.' },
    ],
  },
  {
    title: '2. Privacy Policy and User Data',
    content: 'Heaven\u2019s Privacy Policy describes our information (including message) practices, including the types of information we receive and collect from you and how we use and share this information. You agree to our data practices, including the collection, use, processing, and sharing of your information as described in our Privacy Policy, as well as the transfer and processing of your information in any countries globally where we have or use facilities, service providers, or partners, regardless of where you use our Services. You acknowledge that the laws, regulations, and standards of the country in which your information is stored or processed may be different from those of your own country.',
  },
  {
    title: '3. Acceptable Use of our Services',
    items: [
      { prefix: '3.1', text: 'Our Terms and Policies: You must use our Services according to our Terms and posted policies, If we disable your account for a violation of our Terms, you will not create another account without our permission.' },
      { prefix: '3.2', text: 'Legal and Acceptable Use: You must access and use our Services only for legal, authorised, and acceptable purposes. You must not use (or assist others to use) our Services in ways that: (i) violate, misappropriate, or infringe the rights of Heaven, our users, or others, including privacy, publicity, intellectual property, or other proprietary rights; (ii) are illegal, obscene, defamatory, threatening, intimidating, harassing, hateful, racially, or ethnically offensive, or instigate or encourage conduct that would be illegal, or otherwise inappropriate, including promoting violent crimes; (iii) involve publishing falsehoods, misrepresentations, or misleading statements; (iv) impersonate someone; (v) involve sending illegal or impermissible communications such as bulk messaging, auto-messaging, auto-dialling, and the like; and/or (vi) involve any non-personal use of our Services unless otherwise authorised by us.' },
      { prefix: '3.3', text: 'Harm to Heaven or our Users: You must not (and must not assist others to) access, use, copy, adapt, modify, prepare derivative works based upon, distribute, licence, sub-licence, transfer, display, perform, or otherwise exploit our Services in impermissible or unauthorised manners, or in ways that burden, impair, or harm us, our Services, systems, our users, or others, including that you must not directly or through automated means: (i) reverse engineer, alter, modify, create derivative works from, decompile, or extract code from our Services; (ii) send, store, or transmit viruses or other harmful computer code through or onto our Services; (iii) gain or attempt to gain unauthorised access to our Services or systems; (iv) interfere with or disrupt the integrity or performance of our Services; (v) create accounts for our Services through unauthorised or automated means; (vi) collect the information of or about our users in any impermissible or unauthorised manner; (vii) sell, resell, rent, or charge for our Services; or (viii) distribute or make our Services available over a network where they could be used by multiple devices at the same time.' },
      { prefix: '3.4', text: 'Keeping your Account Secure: You are responsible for keeping your device and your Heaven account safe and secure, and you must notify us promptly of any unauthorised use or security breach of your account or our Services.' },
    ],
  },
  {
    title: '4. Third-party Services',
    content: 'Our Services may allow you to access, use, or interact with third-party websites, apps, content, and other products and services. For example, you may choose to interact with a share button on a third party\u2019s website that enables you to send information to your Heaven contacts. Please note that when you use third-party services, their own terms and privacy policies will govern your use of those services.',
  },
  {
    title: '5. Licenses',
    items: [
      { prefix: '5.1', text: 'Your Rights: Heaven does not claim ownership of the information that you submit for your Heaven account or through our Services. You must have the necessary rights to such information that you submit for your Heaven account or through our Services and the right to grant the rights and licenses in our Terms.' },
      { prefix: '5.2', text: '[Heaven] Intellectual Property Rights: We own all copyrights, trademarks, domains, logos, trade dress, trade secrets, patents, and other intellectual property rights associated with our Services. You may not use our copyrights, trademarks, domains, logos, trade dress, patents and other intellectual property rights unless you have our express permission. You may use the trademarks of our affiliated companies only with their permission, including as authorised in any published brand guidelines.' },
    ],
  },
  {
    title: '6. Reporting Third-party Copyright, Trademark, and other Intellectual Property Infringement',
    items: [
      { prefix: '6.1', text: 'Copyright: To report copyright infringement and request that Heaven remove any infringing content it is hosting (such as a Heaven user\u2019s profile picture, profile name, or status message), please email a completed copyright infringement claim to heavenappteam@gmail.com (including all of the information listed below). Before you report a claim of copyright infringement, you may want to send a message to the relevant Heaven user you believe may be infringing your copyright. You may be able to resolve the issue without contacting Heaven.' },
      { prefix: '6.2', text: 'Trademark: To report trademark infringement and request that Heaven remove any infringing content it is hosting, please email a complete trademark infringement claim to heavenappteam@gmail.com (including all of the information listed below). Before you report a claim of trademark infringement, you may want to send a message to the relevant Heaven user you believe may be infringing your trademark. You may be able to resolve the issue without contacting Heaven.' },
    ],
    content: '6.3 What to include in your copyright or trademark infringement claim to Heaven: Please include all of the following information when reporting a copyright or trademark infringement claim to Heaven:',
  },
  {
    title: '7. Disclaimers',
    content: '7.1 YOU USE OUR SERVICES AT YOUR OWN RISK AND SUBJECT TO THE FOLLOWING DISCLAIMERS. WE ARE PROVIDING OUR SERVICES ON AN \u201C AS IS \u201D BASIS WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND FREEDOM FROM COMPUTER VIRUS OR OTHER HARMFUL CODE. WE DO NOT WARRANT THAT ANY INFORMATION PROVIDED BY US IS ACCURATE, COMPLETE, OR USEFUL, THAT OUR SERVICES WILL FUNCTION WITHOUT DISRUPTIONS, DELAYS, OR IMPERFECTIONS. WE DO NOT CONTROL, AND ARE NOT RESPONSIBLE FOR, CONTROLLING HOW OR WHEN OUR USERS USE OUR SERVICES OR THE FEATURES, SERVICES, AND INTERFACES OUR SERVICES PROVIDE. WE ARE NOT RESPONSIBLE FOR AND ARE NOT OBLIGATED TO CONTROL THE ACTIONS OR INFORMATION (INCLUDING CONTENT) OF OUR USERS OR OTHER THIRD PARTIES. YOU RELEASE US, OUR SUBSIDIARIES, AFFILIATES, AND OUR AND THEIR DIRECTORS, OFFICERS, EMPLOYEES, PARTNERS, AND AGENTS (COLLECTIVELY, THE \u201CHEAVEN PARTIES\u201D) FROM ANY CLAIM, COMPLAINT, CAUSE OF ACTION, CONTROVERSY, OR DISPUTE (COLLECTIVELY \u201CCLAIM\u201D) AND DAMAGES, KNOWN AND UNKNOWN, RELATING TO, ARISING OUT OF, OR IN ANY WAY CONNECTED WITH ANY SUCH CLAIM YOU HAVE AGAINST ANY THIRD PARTIES.',
  },
  {
    title: '8. Limitation of Liability',
    content: '8.1 THE HEAVEN PARTIES SHALL NOT BE LIABLE TO YOU FOR ANY (I) LOSS OF PROFITS; (II) LOSS OF REVENUE, LOSS OF GOODWILL, LOSS OF OPPORTUNITY OR LOSS OF BUSINESS; (III) INCREASED COSTS OR EXPENSES; OR (IV) CONSEQUENTIAL, SPECIAL, PUNITIVE, INDIRECT, OR INCIDENTAL LOSS OF ANY TYPE RELATING TO, ARISING OUT OF, OR IN ANY WAY IN CONNECTION WITH OUR TERMS, US, OR OUR SERVICES, EVEN IF THE HEAVEN PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR AGGREGATE LIABILITY RELATING TO, ARISING OUT OF, OR IN ANY WAY IN CONNECTION WITH OUR TERMS, US, OR OUR SERVICES WILL NOT EXCEED ONE HUNDRED DOLLARS (S$100). THE FOREGOING DISCLAIMER OF CERTAIN DAMAGES AND LIMITATION OF LIABILITY WILL APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW. THE LAWS OF SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION AND LIMITATION OF CERTAIN DAMAGES, SO SOME OR ALL OF THE EXCLUSIONS AND LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU. NOTWITHSTANDING ANYTHING TO THE CONTRARY IN OUR TERMS, IN SUCH CASES, THE LIABILITY OF THE HEAVEN PARTIES WILL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.',
  },
  {
    title: '9. Indemnification',
    content: '9.1 You agree to defend, indemnify, and hold harmless the Heaven Parties from and against all liabilities, damages, losses, and expenses of any kind (including reasonable legal fees and costs) relating to, arising out of, or in any way in connection with any of the following: (i) your access to or use of our Services, including information provided in connection therewith; (ii) your breach or alleged breach of our Terms; or (iii) any misrepresentation made by you. You will cooperate as fully as required by us in the defence or settlement of any Claim.',
  },
  {
    title: '10. Dispute Resolution',
    items: [
      { prefix: '10.1', text: 'Forum: You agree that you will resolve any Claim you have with us relating to, arising out of, or in any way in connection with our Terms, us, or our Services (each, a \u201cDispute\u201d and collectively, \u201cDisputes\u201d) exclusively in the Malaysia courts.' },
      { prefix: '10.2', text: 'Governing Law: The laws of the Republic of Malaysia govern our Terms, as well as any Disputes, which might arise between Heaven and you, without regard to conflict of law provisions.' },
    ],
  },
  {
    title: '11. Availability and Termination of Our Services',
    items: [
      { prefix: '11.1', text: 'Availability of our Services: Our Services may be interrupted, including for maintenance, repairs, upgrades, or network or equipment failures. We may discontinue some or all of our Services, including certain features and the support for certain devices and platforms, at any time. Events beyond our control may affect our Services, such as events in nature and other force majeure events.' },
      { prefix: '11.2', text: 'Termination: We may modify, suspend, or terminate your access to or use of our Services anytime for any reason, such as if you violate the letter or spirit of our Terms or create harm, risk, or possible legal exposure for us, our users, or others. The following provisions will survive any termination of your relationship with Heaven: \u201c5. Licenses\u201d, \u201c7. Disclaimers\u201d, \u201c8. Limitation of Liability\u201d, \u201c9. Indemnification\u201d, \u201c10. Dispute Resolution\u201d, \u201c11. Availability and Termination of Our Services\u201d and \u201c12. Others\u201d.' },
    ],
  },
  {
    title: '12. Others',
    items: [
      { prefix: '12.1', text: 'Unless a mutually executed agreement between you and us states otherwise, our Terms make up the entire agreement between you and us regarding Heaven and our Services, and supersede any prior agreements.' },
      { prefix: '12.2', text: 'We may ask you to agree to additional terms for certain of our Services in the future, which will govern to the extent there is a conflict between our Terms and such additional terms.' },
      { prefix: '12.3', text: 'Our Services are not intended for distribution to or use in any country where such distribution or use would violate local law or would subject us to any regulations in another country. We reserve the right to limit our Services in any country.' },
      { prefix: '12.4', text: 'Our Terms are written in English. Any translated version is provided solely for your convenience. To the extent any translated version of our Terms conflicts with the English version, the English version prevails.' },
      { prefix: '12.5', text: 'Any amendment to or waiver of our Terms requires our express consent.' },
      { prefix: '12.6', text: 'We may amend or update these Terms. We will provide you notice of amendments to our Terms, as appropriate, and update the \u201cLast Modified\u201d date at the top of our Terms. Your continued use of our services confirms your acceptance of our Terms, as amended. If you do not agree to our Terms, as amended, you must stop using our Services. Please review our Terms from time to time.' },
      { prefix: '12.7', text: 'All of our rights and obligations under our Terms are freely assignable by us to any of our affiliates or in connection with a merger, acquisition, restructuring, or sale of assets, or by operation of law or otherwise, and we may transfer your information to any of our affiliates, successor entities, or new owner.' },
      { prefix: '12.8', text: 'You will not transfer any of your rights or obligations under our Terms to anyone else without our prior written consent.' },
      { prefix: '12.9', text: 'Nothing in our Terms will prevent us from complying with the law.' },
      { prefix: '12.10', text: 'Except as contemplated herein, our Terms do not give any third-party beneficiary rights.' },
      { prefix: '12.11', text: 'If we fail to enforce any of our Terms, it will not be considered a waiver.' },
      { prefix: '12.12', text: 'If any provision of these Terms is deemed unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from our Terms and shall not affect the validity and enforceability of the remaining provisions.' },
      { prefix: '12.13', text: 'We reserve all rights not expressly granted by us to you. In certain jurisdictions, you may have legal rights as a consumer, and our Terms are not intended to limit such consumer legal rights that may not be waived by contract.' },
      { prefix: '12.14', text: 'We always appreciate your feedback or other suggestions about Heaven and our Services, but you understand that we may use your feedback or suggestions without any obligation to compensate you for them (just as you have no obligation to offer them).' },
    ],
  },
];

const TermsOfService = () => {
  return (
    <div className='min-h-screen pt-[12vh] bg-white'>
      <div className='w-[90%] mx-auto py-16'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
            Terms of Service
          </h1>
          <p className='text-gray-600 text-lg'>Last amended on 09 June 2025</p>
        </div>

        <div className='max-w-4xl mx-auto text-gray-700'>
          <h3 className='text-xl font-bold text-gray-900 mb-4'>Heaven Terms of Service</h3>
          <p className='mb-4'>
            Heaven (&ldquo;Heaven&rdquo;, &ldquo;our&rdquo;, &ldquo;we&rdquo;, or &ldquo;us&rdquo;) provides messaging, and other services to users around the world. Please read these Terms of Service (&ldquo;Terms&rdquo;) so you understand the terms of your use of Heaven. You agree to these Terms by installing, accessing, or using our apps, services, features, software, or website (collectively &ldquo;Services&rdquo;).
          </p>
          <p className='mb-6'>
            If you have any questions about, or if you wish to send us any notices in relation to, these Terms, please contact us at <a href="mailto:heavenappteam@gmail.com" className='text-amber-600'>heavenappteam@gmail.com</a>.
          </p>

          {termsSections.map((section, index) => (
            <div key={index} className='mb-6'>
              <h4 className='text-lg font-semibold text-gray-900 mb-2'>{section.title}</h4>
              {section.content && (
                <p className='ml-6 mb-2'>{section.content}</p>
              )}
              {section.items && section.items.map((item, itemIndex) => (
                <p key={itemIndex} className='ml-6 mb-2'>
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

export default TermsOfService
