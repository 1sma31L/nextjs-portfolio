import { FaReact } from 'react-icons/fa6';
import { FaCss3, FaGithub, FaHtml5, FaLinux, FaNode } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiArchlinux,
  SiExpress,
  SiGit,
  SiGnubash,
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiGo,
  SiNestjs,
  SiTrpc,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiNeovim,
} from 'react-icons/si';

import { IoLogoFirebase } from 'react-icons/io5';
import { TItem } from '@/types/types';
import { VscVscode } from 'react-icons/vsc';

const stack: TItem[] = [
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    color: 'Orange',
  },
  {
    name: 'CSS',
    icon: <FaCss3 />,
    color: 'Blue',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    color: 'Yellow',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'Blue',
  },
  {
    name: 'Go',
    icon: <SiGo />,
    color: 'Blue',
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill />,
    color: 'Cyan',
  },
  {
    name: 'React',
    icon: <FaReact />,
    color: 'Blue',
  },
  {
    name: 'Next.js',
    icon: <RiNextjsFill />,
    color: 'Zinc',
  },
  {
    name: 'Node.js',
    icon: <FaNode />,
    color: 'Green',
  },
  {
    name: 'Express.js',
    icon: <SiExpress />,
    color: 'Zinc',
  },
  {
    name: 'Nest.js',
    icon: <SiNestjs />,
    color: 'Red',
  },
  {
    name: 'tRPC',
    icon: <SiTrpc />,
    color: 'Blue',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    color: 'Green',
  },
  {
    name: 'PostgreSql',
    icon: <SiPostgresql />,
    color: 'Blue',
  },
  {
    name: 'Firebase',
    icon: <IoLogoFirebase />,
    color: 'Yellow',
  },
  {
    name: 'Supabase',
    icon: <SiSupabase />,
    color: 'Green',
  },
  {
    name: 'Git',
    icon: <SiGit />,
    color: 'Red',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    color: 'Zinc',
  },
  {
    name: 'Docker',
    icon: <SiDocker />,
    color: 'Blue',
  },
  {
    name: 'Bash',
    icon: <SiGnubash />,
    color: 'Zinc',
  },
  {
    name: 'Linux',
    icon: <FaLinux />,
    color: 'Yellow',
  },
  {
    name: 'Arch',
    icon: <SiArchlinux />,
    color: 'Blue',
  },
  {
    name: 'Nvim',
    icon: <SiNeovim />,
    color: 'Green',
  },
];

export default stack;
