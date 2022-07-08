import { publish } from 'gh-pages';

publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Draconizations/draconizations-sveltekit-blog', // Update to point to your repository
    user: {
      name: 'Draconizations', // update to use your name
      email: 'jake@fulmine.xyz' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);