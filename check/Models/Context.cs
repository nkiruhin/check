using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace checks.Model
{
    public class EntityInformation:IdentityUser
    {
        public string OrganizationName { get; set; }
        public string ContactPhoneNumber { get; set; }
    }
    public class Context:DbContext
    {
        public Context(DbContextOptions<Context> options)
              : base(options)
        { }
        public DbSet<EntityInformation> Entities { get; set; }
    }
}
