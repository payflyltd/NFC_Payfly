const { execSync } = require('child_process');

try {
  // Check if the local gh-pages branch exists
  const localBranches = execSync('git branch', { stdio: 'pipe' }).toString();
  if (localBranches.includes('gh-pages')) {
    // Delete the local gh-pages branch if it exists
    console.log('Deleting local gh-pages branch...');
    execSync('git branch -D gh-pages', { stdio: 'inherit' });
  } else {
    console.log('Local gh-pages branch not found.');
  }
} catch (error) {
  console.error('Error checking/deleting local gh-pages branch:', error);
}

try {
  // Check if the remote gh-pages branch exists
  const remoteBranches = execSync('git ls-remote --heads origin', { stdio: 'pipe' }).toString();
  if (remoteBranches.includes('refs/heads/gh-pages')) {
    // Delete the remote gh-pages branch if it exists
    console.log('Deleting remote gh-pages branch...');
    execSync('git push origin --delete gh-pages', { stdio: 'inherit' });
  } else {
    console.log('Remote gh-pages branch not found.');
  }
} catch (error) {
  console.error('Error checking/deleting remote gh-pages branch:', error);
}
