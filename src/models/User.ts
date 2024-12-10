export class User {
    id: string;
    name: string;
    email: string;
    profilePicture?: string;
    createdAt: string;
    updatedAt: string;
  
    constructor(
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      profilePicture?: string
    ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.profilePicture = profilePicture;
    }
  
    updateProfile(name: string, email: string, profilePicture?: string) {
      this.name = name;
      this.email = email;
      if (profilePicture) this.profilePicture = profilePicture;
    }
  }
  