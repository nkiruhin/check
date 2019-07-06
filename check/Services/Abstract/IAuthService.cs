using Microsoft.AspNetCore.Identity;
using checks.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace check.Services
{
    public interface IAuthService
    {
        Task<AuthData> GetAuthDataAsync(string username);
        //IEnumerable<Field> GetForm();
        Task<SignInResult> LoginAsync(string username, string password);
        Task LogoutAsync();
        //Task<List<Field>> GetFormAsync(int id);
        Task<IdentityResult> EditAccount(int id, string username, string password);
        //Task<IdentityResult> DeleteAccount(int id);
    }
}
