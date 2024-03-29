namespace API.Models.DTOs
{

    public class AppUserDto {
        public int UserID { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int TimezoneLocationID { get; set; }
        public string Token { get; set; }
    }
}