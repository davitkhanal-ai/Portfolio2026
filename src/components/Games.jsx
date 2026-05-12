import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SiCounterstrike, SiSteam } from 'react-icons/si';

const games = [
  {
    id: 'dota2',
    name: 'Dota 2',
    icon: SiSteam,
    tagline: 'MOBA Mastery',
    color: '#FF6B35',
    projects: [
      {
        title: 'Dota 2 Support Specialist',
        desc: 'Maintained a long-term Dota 2 play profile with over 10,000 hours on record, focusing on support and team coordination in ranked matches.',
        stats: [
          '10,018 hours played on record',
          'Primary role: Support',
          'Last played on 10 May',
        ],
        tags: ['MOBA', 'Support', 'Team Play'],
      },
    ],
  },
  {
    id: 'cs2',
    name: 'Counter-Strike 2',
    icon: SiCounterstrike,
    tagline: 'Tactical FPS Excellence',
    color: '#F79E02',
    projects: [
      {
        title: 'CS2 Recent Activity',
        desc: 'Played Counter-Strike 2 as a tactical FPS specialist, with recent record activity and a strong focus on coordination and utility usage.',
        stats: [
          '1 hour on record',
          'Last played on 9 May',
          'Focused on team tactics and positional play',
        ],
        tags: ['FPS', 'Tactics', 'Utility'],
      },
    ],
  },
  // {
  //   id: 'valorant',
  //   name: 'Valorant',
  //   icon: SiValorant,
  //   tagline: '5v5 Tactical Shooter',
  //   color: '#FF4655',
  //   projects: [
  //     {
  //       title: 'Valorant Agent Mastery',
  //       desc: 'Mastered multiple agents in Valorant, excelling in duelist and controller roles with precise aim and ability usage.',
  //       stats: [
  //         'Radiant Rank',
  //         'Top 10% in regional leaderboards',
  //         'Specialized in Phoenix and Sage',
  //       ],
  //       tags: ['FPS', 'Abilities', 'Strategy'],
  //     },
  //   ],
  // },
  // {
  //   id: 'wukong',
  //   name: 'Black Myth: Wukong',
  //   icon: GiMonkey,
  //   tagline: 'Action RPG Adventure',
  //   color: '#8B4513',
  //   projects: [
  //     {
  //       title: 'Wukong Journey Completion',
  //       desc: 'Completed the full story of Black Myth: Wukong, mastering combat mechanics and exploring all hidden areas.',
  //       stats: [
  //         '0.01% completion achieved',
  //         'Just Started the Journey',
  //         'Starting to explore the mystical world of Wukong',
  //       ],
  //       tags: ['RPG', 'Action', 'Exploration'],
  //     },
  //   ],
  // },
];

const ProjectModal = ({ game, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className='fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className='bg-[#1a1a1a] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative'
        data-lenis-prevent
      >
        {/* Header */}
        <div className='sticky top-0 bg-[#1a1a1a]/95 backdrop-blur border-b border-white/10 p-6 flex items-center justify-between z-10'>
          <div className='flex items-center gap-4'>
            <div
              className='p-5 rounded-lg bg-blue/5'
              style={{ color: game.color }}
            >
              <game.icon size={100} />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-white'>{game.name}</h3>
              <p className='text-gray-400 text-sm'>Match Records</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className='p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors'
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className='p-6 space-y-8'>
          {game.projects.map((project, idx) => (
            <div
              key={idx}
              className='bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors'
            >
              <div className='flex justify-between items-start mb-4'>
                <h4 className='text-xl font-bold text-white'>
                  {project.title}
                </h4>
                <div className='flex gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-black/30 text-cyan text-xs rounded border border-cyan/20 font-mono'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className='text-gray-300 mb-6 leading-relaxed'>
                {project.desc}
              </p>

              <div className='space-y-3'>
                <h5 className='text-sm font-semibold text-gray-500 uppercase tracking-wider'>
                  Key Achievements
                </h5>
                <ul className='space-y-2'>
                  {project.stats.map((stat, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-3 text-gray-300 text-sm'
                    >
                      <CheckCircle2
                        size={16}
                        className='text-papaya mt-0.5 flex-shrink-0'
                      />
                      <span>{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className='p-6 border-t border-white/10 bg-white/5'>
          <button
            onClick={onClose}
            className='w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors'
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
};

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <section id='games' className='py-24 px-6 bg-[#05070f] relative z-10'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-4 text-center'>
            Currently <span className='text-papaya'>Playing</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl text-center mx-auto'>
            Choose a game to open the match dashboard and review key performance
            stats.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedGame(game)}
              className='group cursor-pointer'
            >
              <div className='bg-[#0f1220] border border-cyan/10 rounded-2xl p-8 h-full flex flex-col items-center justify-center gap-6 hover:border-cyan/40 hover:bg-white/5 transition-all duration-300 shadow-[0_20px_60px_-30px_rgba(59,130,246,0.75)]'>
                <div
                  className='p-5 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300'
                  style={{ color: game.color }}
                >
                  <game.icon size={56} />
                </div>
                <div className='text-center'>
                  <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-papaya transition-colors'>
                    {game.name}
                  </h3>
                  <p className='text-gray-400 text-sm font-medium'>
                    {game.tagline}
                  </p>
                </div>
                <div className='mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0'>
                  <span className='text-cyan text-xs font-bold uppercase tracking-widest flex items-center gap-1'>
                    View Stats <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedGame && (
          <ProjectModal
            game={selectedGame}
            onClose={() => setSelectedGame(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Games;
