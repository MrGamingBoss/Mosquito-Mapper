import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HELP_SECTIONS = [
  {
    id: 'clouds',
    title: 'Clouds Help',
    colorClass: 'bg-sky-400 hover:bg-sky-500 text-white border-sky-500',
    content: (
      <p className="text-white/90 text-sm leading-relaxed">
        GLOBE Observer Clouds is an easy to use tool for recording clouds and sky conditions. You can compare your observation to NASA satellite data when within 15 minutes of an overpass. Set notifications for satellite flyovers and solar noon in Settings.
      </p>
    ),
  },
  {
    id: 'mosquitoes',
    title: 'Mosquitoes Help',
    colorClass: 'bg-amber-600 hover:bg-amber-700 text-white border-amber-700',
    content: (
      <p className="text-white/90 text-sm leading-relaxed">
        The Mosquito Habitat Mapper helps citizen scientists track the range and spread of mosquitoes that can transmit disease. Data is shared with public health, government, and scientific institutions to support understanding of mosquito vectors and reduce disease risk in communities.
      </p>
    ),
  },
  {
    id: 'land-cover',
    title: 'Land Cover Help',
    colorClass: 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-600',
    content: (
      <p className="text-white/90 text-sm leading-relaxed">
        The Land Cover tool helps you record what is on the land around you—trees, buildings, bare ground. Land cover data supports disaster risk assessment, wildlife habitat mapping, and scientific research. Your observations help create better satellite maps.
      </p>
    ),
  },
  {
    id: 'trees',
    title: 'Trees Help',
    colorClass: 'bg-green-600 hover:bg-green-700 text-white border-green-700',
    content: (
      <p className="text-white/90 text-sm leading-relaxed">
        The Trees tool assists citizen scientists in cataloging tree data with an emphasis on measuring tree height. Data is shared with public, government, and scientific research institutions to improve understanding of tree height across the planet.
      </p>
    ),
  },
];

const FAQ_ITEMS = [
  {
    q: 'Do I have to be online to make measurements?',
    a: 'The app works in an off-line mode which allows you to enter data until you choose to send it to GLOBE. The desktop version of the data entry system requires you to be online.',
  },
  {
    q: 'Is my data automatically sent to GLOBE?',
    a: 'Data is stored on the app until you choose to send it. You can select Review/Edit my measurements when you finish a protocol, or look to the small bar graph icon on the bottom left to access the send data page. On desktop, data is sent immediately on completion of the protocol.',
  },
  {
    q: 'Where can I see my data on the GLOBE site?',
    a: 'There are many ways to see your and other\'s measurements. Look for "My Observations" to see just your submissions to GLOBE. You can go to GLOBE Visualization to see all of the data sent to GLOBE.',
  },
  {
    q: 'Why don\'t I see my data in the visualization system yet?',
    a: 'Be sure you click Review/Send My Observations and verify no errors are reported. Reports with photos may be delayed as we review all photos before posting to ensure appropriate content.',
  },
  {
    q: 'Can more than one user use this App on my phone/tablet?',
    a: 'Yes – click the gear icon (settings) to find links which will allow you to add additional accounts, or logout of the current account.',
  },
  {
    q: 'Is this app available in different languages?',
    a: 'Yes – click on the gear icon (settings) to find the Change Language link.',
  },
];

export default function Help() {
  return (
    <div className="space-y-6 pb-8">
      <h1 className="text-xl font-bold text-white">Help</h1>

      <p className="text-white/90 text-sm leading-relaxed">
        The GLOBE Observer App allows you to contribute to the GLOBE program, providing valuable observations to our database. If you&apos;d like more information on GLOBE, or the Observer app, select from the links below.
      </p>

      {/* Colorful dropdown sections */}
      <Accordion type="single" collapsible className="space-y-2">
        {HELP_SECTIONS.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="border-0 rounded-xl overflow-hidden shadow-md"
          >
            <AccordionTrigger
              className={`flex items-center justify-between w-full px-4 py-4 text-left font-semibold rounded-xl border-2 ${section.colorClass} [&[data-state=open]]:rounded-b-none hover:no-underline [&>svg]:text-white [&>svg]:shrink-0`}
            >
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="bg-white/10 border-2 border-t-0 border-white/20 rounded-b-xl px-4 py-4">
              {section.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Info links as accordions */}
      <Accordion type="single" collapsible className="space-y-0 border border-white/20 rounded-xl overflow-hidden bg-white/10 shadow-md">
        <AccordionItem value="about" className="border-b border-white/20 last:border-b-0">
          <AccordionTrigger className="px-4 py-4 text-white font-medium hover:no-underline hover:bg-white/10">
            About the GLOBE Observer App
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-sm text-white/90">
            <p>GLOBE Observer is a citizen science app that lets you contribute environmental observations to the GLOBE Program. Your data supports NASA and global research on Earth&apos;s atmosphere, land, water, and life.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faqs" className="border-b border-white/20 last:border-b-0">
          <AccordionTrigger className="px-4 py-4 text-white font-medium hover:no-underline hover:bg-white/10">
            FAQs
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="space-y-4 text-sm">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="text-white/90">
                  <p className="font-semibold text-white mb-1">Q: {item.q}</p>
                  <p className="text-white/80">A: {item.a}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="what-is-globe" className="border-b border-white/20 last:border-b-0">
          <AccordionTrigger className="px-4 py-4 text-white font-medium hover:no-underline hover:bg-white/10">
            What is GLOBE?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-sm text-white/90">
            <p>GLOBE (Global Learning and Observations to Benefit the Environment) is an international science and education program. It provides students and the public worldwide with the opportunity to participate in data collection and contribute to our understanding of the Earth system and global environment.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="how-to-join" className="border-b border-white/20 last:border-b-0">
          <AccordionTrigger className="px-4 py-4 text-white font-medium hover:no-underline hover:bg-white/10">
            How to Join GLOBE?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-sm text-white/90">
            <p>You can join GLOBE by creating an account at globe.gov. Download the GLOBE Observer app, sign in with your account, and start submitting observations. Educators and organizations can also partner with GLOBE as U.S. Partners or Country Coordinators.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="globe-team" className="last:border-b-0">
          <AccordionTrigger className="px-4 py-4 text-white font-medium hover:no-underline hover:bg-white/10">
            What is a GLOBE Team?
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 text-sm text-white/90">
            <p>A GLOBE Team is a group of people—such as a class, club, or community—that collects and submits data together. Teams can be associated with schools, informal education organizations, or other groups participating in the GLOBE Program.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="bg-white/10 rounded-xl p-4 border border-white/20">
        <p className="text-sm text-white/90">
          <strong className="text-white">GLOBE Observer</strong> is part of NASA&apos;s GLOBE Program. Your observations help scientists study Earth.
        </p>
      </div>
    </div>
  );
}
