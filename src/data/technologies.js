import {
  SiPython, SiJavascript, SiHtml5, SiCss, SiReact,
  SiFlask, SiMongodb, SiGithub, SiLinux, SiFigma, SiLatex,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const technologies = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Flask', icon: SiFlask }, // no color = uses theme text color (see note below)
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'GitHub', icon: SiGithub }, // no color = uses theme text color (see note below)
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'LaTeX', icon: SiLatex, color: '#008080' },
];
