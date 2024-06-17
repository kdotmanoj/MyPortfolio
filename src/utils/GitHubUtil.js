export const fetchGitHubProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/kdotmanoj/repos');
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub projects');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
      return [];
    }
  };
  