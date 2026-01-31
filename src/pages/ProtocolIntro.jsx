import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Settings } from 'lucide-react';

const PROTOCOL_CONTENT = {
  'data-entry': {
    screenTitle: 'Data Entry',
    subtitle: 'Atmosphere • Hydrosphere • Biosphere • Pedosphere',
    showDataEntryUI: true,
    body: (
      <>
        <p className="text-white/90 mb-2">Welcome,</p>
        <p className="text-white/90 mb-2">You are currently in practice mode</p>
        <p className="text-white/90 mb-6">
          Want to switch? <button type="button" className="text-sky-200 underline font-medium hover:text-white">Click here to sign in.</button>
        </p>
        <div className="flex flex-col gap-3">
          <button type="button" className="w-full py-3 rounded-xl font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
            New Observation(s)
          </button>
          <button type="button" className="w-full py-3 rounded-xl font-semibold bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-colors">
            Review/Send Observations
          </button>
          <button type="button" className="w-full py-3 rounded-xl font-semibold bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-colors">
            Edit/Delete Measurements
          </button>
          <button type="button" className="w-full py-3 rounded-xl font-semibold bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-colors">
            Create/Edit My Sites
          </button>
          <button type="button" className="w-full py-3 rounded-xl font-semibold bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-colors">
            My Observations
          </button>
        </div>
      </>
    ),
  },
  clouds: {
    screenTitle: 'Introduction',
    subtitle: 'GLOBE Observer Clouds',
    showDataEntryUI: false,
    body: (
      <>
        <p className="text-white/90 mb-4">
          GLOBE Observer &apos;Clouds&apos; is an easy to use tool for recording clouds and sky conditions as you go about your day.
        </p>
        <p className="text-white/90 mb-4">
          Users can visualize the observations you submit to GLOBE, as well as those submitted by other app users from around the world, by clicking <button type="button" className="text-sky-200 font-semibold hover:text-white">HERE</button>.
        </p>
        <p className="text-white/90 mb-4">
          You can also compare your observation to one taken by a NASA satellite if your observation is within 15 minutes of a satellite overpass. Enabling the app&apos;s notifications feature informs you of satellite flyovers so you can plan your observation time.
        </p>
        <p className="text-white/90 mb-6">
          In addition, observing at solar noon allows you to more easily compare your measurements with other GLOBE users. You can also set a notification for solar noon at your location. Notifications are enabled by selecting the settings icon <Settings className="inline w-4 h-4 text-white/80" /> in the top right corner of the Home screen.
        </p>
        <button type="button" className="flex items-center justify-between w-full py-3 text-sky-200 font-semibold border-t border-white/20 mt-2">
          Next
          <span className="text-lg">→</span>
        </button>
      </>
    ),
  },
  mosquito: {
    screenTitle: 'Introduction',
    subtitle: 'GLOBE Observer Mosquito Habitat Mapper',
    showDataEntryUI: false,
    body: (
      <>
        <p className="text-white/90 mb-4">
          GLOBE Observer collects data about the Earth system- air water land and life. Changes in one part of the system propagate changes in the other parts, this is why GLOBE hopes you will collect data using all the tools on the app each time you use the app.
        </p>
        <p className="text-white/90 mb-4">
          The GLOBE Observer Mosquito Habitat Mapper App is designed to assist citizen scientists (GLOBE Observers) with tracking the range and spread of mosquitoes that can potentially transmit disease.
        </p>
        <p className="text-white/90 mb-6">
          The data collected by this app are shared with public health, government and scientific institutions. By using this app, you are contributing to our understanding of the presence, range and spread of mosquitoes that are vectors for disease. You are also reducing the risk of mosquito vector borne disease in your community.
        </p>
        <button type="button" className="flex items-center justify-between w-full py-3 text-sky-200 font-semibold border-t border-white/20 mt-2">
          Next
          <span className="text-lg">→</span>
        </button>
      </>
    ),
  },
  'land-cover': {
    screenTitle: 'Introduction',
    subtitle: 'GLOBE Observer Land Cover',
    showDataEntryUI: false,
    body: (
      <>
        <p className="text-white/90 mb-4">
          The GLOBE Observer Land Cover tool is designed to help volunteer observers record what is on the land around them, from trees to buildings to bare ground. Land cover maps are helpful for assessing risks from disasters like floods or fires, for defining wildlife habitat, for understanding change over time, and for addressing many other scientific questions.
        </p>
        <p className="text-white/90 mb-6">
          The data collected by this app are shared with public, government and scientific institutions. By using this app, you are contributing to our understanding of both land cover and land use. You will also provide information that will create better satellite maps. <a href="https://observer.globe.gov/about/land-cover" target="_blank" rel="noopener noreferrer" className="text-sky-200 underline font-medium hover:text-white">Read more about land cover science.</a>
        </p>
        <button type="button" className="flex items-center justify-between w-full py-3 text-sky-200 font-semibold border-t border-white/20 mt-2">
          Next
          <span className="text-lg">→</span>
        </button>
      </>
    ),
  },
  trees: {
    screenTitle: 'Introduction',
    subtitle: 'GLOBE Observer Trees App',
    showDataEntryUI: false,
    body: (
      <>
        <h2 className="text-xl font-bold text-white mb-4">Welcome to the GLOBE Observer Trees App</h2>
        <p className="text-white/90 mb-4">
          This tool assists citizen scientists (GLOBE Observers) to catalog tree data, with an emphasis on measuring tree height.
        </p>
        <div className="flex justify-center gap-4 my-6 py-4">
          <span className="text-4xl" aria-hidden>🌴</span>
          <span className="text-4xl" aria-hidden>🌳</span>
          <span className="text-4xl" aria-hidden>🌲</span>
          <span className="text-4xl" aria-hidden>🌵</span>
          <span className="text-4xl" aria-hidden>🍂</span>
        </div>
        <p className="text-white/90 mb-6">
          The data you will be collecting with this app are shared with public, government and scientific research institutions and will contribute to a better understanding of tree height across our home planet.
        </p>
        <button type="button" className="w-full py-3 rounded-xl font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
          Next
        </button>
      </>
    ),
  },
};

export default function ProtocolIntro() {
  const { protocolId } = useParams();
  const navigate = useNavigate();
  const content = protocolId ? PROTOCOL_CONTENT[protocolId] : null;

  if (!content) {
    return (
      <div className="space-y-4">
        <button type="button" onClick={() => navigate('/')} className="flex items-center gap-2 text-white font-medium hover:underline">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </button>
        <p className="text-white/90">Protocol not found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-8">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-white font-medium hover:underline"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <div className="bg-white/10 rounded-xl shadow-md border border-white/20 overflow-hidden">
        {/* Header band */}
        <div className="bg-[#1d4ed8] text-white px-4 py-3">
          {content.subtitle && (
            <p className="text-xs font-medium text-white/90 uppercase tracking-wider mb-1">{content.subtitle}</p>
          )}
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-white drop-shadow-sm">{content.screenTitle}</h1>
            {content.showDataEntryUI && (
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0" aria-hidden>
                <Search className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 text-white/90">
          {content.body}
        </div>
      </div>
    </div>
  );
}
