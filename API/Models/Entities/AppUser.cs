namespace API.Models.Entities {
    public class AppUser {
        public int UserID { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; } 
        public DateTime ModifiedDatetime { get; set; } = DateTime.UtcNow;
    }
}