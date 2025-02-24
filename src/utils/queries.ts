export const FaqsQuery = `
  query Faqs($locales: [Locale!] = pl) {
    faqs(locales: $locales) {
      id
      question
      answer
      priority
    } 
  }
`;

export const FeaturesQuery = `
  query Features($locales: [Locale!] = pl) {
    features(locales: $locales) {
      id
      title
      description
      image {
        url
        width
        height
      }
      icon {
        url
        width
        height
      }
      priority
    }
  }
`;

export const NavigationQuery = `
  query Navigations($locales: [Locale!] = pl) {
    navigations(locales: $locales) {
      id
      navigationId
      items {
        id
        title
        url
        targetBlank
      }
    }
  }
`;

export const AuthorsQuery = `
  query Authors($locales: [Locale!] = pl) {
    authors(locales: $locales) {
      id
      fullName
      nickname
      roles
      slug
      avatar {
        url
        width
        height
      }
      portfolio
    }
  }
`;