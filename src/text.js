import lmgtfy1 from './img/lmgtfy1.png'
import lmgtfy3 from './img/lmgtfy-page.png'
import lmgtfy2 from './img/lmgtfy2.png'

import sigmo1 from './img/sigmo-preview-portfolio.gif'
import sigmo2 from './img/sigmo-preview3.gif'

import blender1 from './img/creature2.png'
import blender2 from './img/sirenhead.png'
import blender3 from './img/creature-animated.gif'
import blender4 from './img/stove.png'

import portfolio1 from './img/bg-image-2.png'
import portfolio2 from './img/react-gif.gif'

import game1 from './img/game1.jpg'
import game2 from './img/landscape.gif'

import vegsoc1 from './img/vegsoc.png'

const text = {
  about: {
    short: `I'm a young and passionate web and game developer looking to gather more experience in the industry and put my skills to use in a professional environment. I've been in love with programming since I started over eight years ago; from messing about with Arduino to starting my journey in game development and now developing all the front end for a big client's web app. I look forward to continue my journey in the web development industry, meeting new people and gathering more knowledge on the way.`,
  },
  projects: {
    vegsoc: {
      bgfixed: true,
      span: 1,
      title: "Society Web Portal",
      short: "Currently working on a complete web portal for the vegan and vegetarian society at the University of Southampton.",
      long: <>I love having side projects to work on and try out new technologies or practice some skills. Most recently I've been working on a web portal for VegSoc society
              members to know what events are going on, what society books are available for borrowing, vote on events for the future, etc.
              This will give me a chance to develop my back end skills as well as creating a complete user authentication and profile system from scratch.
              It also gives me a bit of a creative outlet and a space to try out cool CSS libraries or experiment with funky animations.
           </>,
      images: {
        cover: [vegsoc1],
        horizontal: [vegsoc1],
        vertical: [],
      },
    },
    portfolio: {
      bgfixed: true,
      span: 1,
      title: "This Page!",
      short: "A fully responsive React app styled with tailwind CSS made from scratch.",
      long: <>I take joy in designing and creating websites, and since my foray into React I have really started to enjoy adding functionality to them. I find the component workflow extremely satisfying and it makes representing dynamic information in UI so much easier and intuitive.
           This site was made in about a week and I'm very happy with how it turned out. It helped me refine my git skills as well as put into practice some of my React knowledge.

           Update: Decided to update the site to use react-router to properly implement a form multi-page navigation!
           </>,
      images: {
        cover: [portfolio1],
        horizontal: [portfolio2],
        vertical: [],
      },
    },
    lmgtfy: {
      span: 1,
      title: "LMGTFY Firefox Addon",
      short: <>A firefox add-on that allows you to immediately obtain a link to a 
          <a className="underline" href="https://letmegooglethat.com/" target="_blank" rel="noreferrer"> LMGTFY </a>
           question to send in reply to anyone asking a rudely googleable question.</>,
      long: <>This was a simple project to familiarize myself with the browser addon development workflow,
          essentially only as difficult as the functionality you want to give it. In my case, some simple string manipulation and concatenation for the URL
          was all that was required, plus a few methods to obtain the information from the selected text and saving urls to the clipboard. <br/><br/>
          The result was a silly addon that allow you to copy text on any page and copy that as a URL to letmegooglethat.com that will show you how to google that text,
          you can alternatively use the addon icon in the toolbar to open a little menu to copy your own question URL as well as toggle "copied to clipboard" notifications.<br/><br/>
          Code available on <a className="underline" href="https://github.com/Vurak/lmgtfy-add-on" target="_blank" rel="noreferrer"> GitHub</a>.<br/>
          And you can check out the addon <a className="underline" href="https://addons.mozilla.org/en-GB/firefox/addon/lmgtfy-addon/" target="_blank" rel="noreferrer">here</a>.</>,
      images: {
        cover: [lmgtfy1],
        horizontal: [lmgtfy2],
        vertical: [lmgtfy3],
      },
    },
    game: {
      span: 3,
      title: "Dug In",
      short: `Dug In (working title) is a first person video game I am developing in the Unity game engine that will be my first commercial release. `,
      long:  <>This is my first full indie 3D title made with the Unity engine. I started production in summer 2020 and since then have almost completed work on this fully fledged indie title, 
          that includes gameplay programming, AI and pathfinding using unity's navmesh system, asset creation (modelling, texturing, basic animating), shader development with ShaderGraph, 
          among other development tasks that a solo indie dev has to do. You play as an isolated man mourning the recent death of his dog, however a strange turn of events leaves you fighting 
          off hordes of night creatures defending an otherworldly crystal that has taken the form of your dog. <br/><br/>
          I try to post updates on <a className="underline" href="https://twitter.com/SurakDev" target="_blank" rel="noreferrer">this twitter page.</a> </>,
      images: {
        cover: [game1],
        horizontal: [game2],
        vertical: [],
      },
    },
    blender: {
      span: 2,
      title: "3D Modelling",
      short: `Take a look at some of the blender models I have made!`,
      long: `As part of my game development journey, I have had to learn 3D modelling to allow myself to have more control over the style and consistency in style of the game, as well as making the development process more economical (albeit also more time consuming!)
          I love the asthetic and lore surrounding creatures like sirenhead. Some of my better models include a version of the sirenhead creature (created by Trevor Henderson), another original creature with a similar style, and an old stove prop.`,
      images: {
        cover: [blender3],
        horizontal: [blender1, blender4],
        vertical: [blender2],
      },
    },
    sigmo: {
      span: 2,
      title: "Unity Orbital Mechanics Simulator",
      short: "An application that makes use of Unity's physics engine to simulate gravitational interactions between objects in two possible modes.",
      long: "This application models the effects of gravity on the orbit of a spacecraft depending on its direction of propulsion and visualises the n body problem. This involved bringing orbital mechanics equations into code in order to accurately simulate a large number of gravitational interactions for one part of the program, as well as allowing for real-time visualization of the orbit of a craft during an orbital manoeuvre.",
      images: {
        cover: [sigmo1],
        horizontal: [sigmo1],
        vertical: [sigmo2],
      },
    },
  }
}

export default text