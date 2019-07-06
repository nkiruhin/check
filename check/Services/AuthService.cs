using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using checks.Model;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace check.Services
{
    public class AuthService: IAuthService
    {
        private const string _jwtSecret= "U2FsYXJ5Q2FsY3VsYXRvclNlY3JldEtleQ==";
        private const int _jwtLifespan= 2592000;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        public AuthService( SignInManager<User> signInManager, UserManager<User> userManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;           
        }

        
        public async Task<AuthData> GetAuthDataAsync(string username)
        {
            User user = await _userManager.FindByNameAsync(username);
            
            var expirationTime = DateTime.UtcNow.AddSeconds(_jwtLifespan);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),

                Expires = expirationTime,
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSecret)),
                    SecurityAlgorithms.HmacSha256Signature
                )
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
            return new AuthData
            {
                Token = token,
                TokenExpirationTime = ((DateTimeOffset)expirationTime).ToUnixTimeSeconds(),
                Id = user.Id.ToString(),
                name = username
            };
        }
        //public async Task<List<Field>> GetFormAsync(int id)
        //{
        //    User user = null;
        //    if (HasAccount(id, out string AccountId))
        //    {
        //        user = await _userManager.FindByIdAsync(AccountId);
        //    }
        //    var form = new List<Field>
        //    {
        //        new Field
        //        {
        //            Name="username",
        //            Type="String",
        //            IsRequired=true,
        //            DisplayName="Имя пользователя",
        //            Value = user?.UserName
        //        },
        //        new Field
        //        {
        //            Name="password",
        //            Type="Password",
        //            IsRequired=true,
        //            DisplayName="Пароль"
        //        }
        //    };
        //    return form;
        //}
        public async Task<IdentityResult> EditAccount(int id, string username, string password)
        {
            User user = null;
            user = await _userManager.FindByNameAsync(username);
            if (user != null) { 
                var token = await _userManager.GeneratePasswordResetTokenAsync(user);
                var result = await _userManager.ResetPasswordAsync(user, token, password);
                return result;
            }
            else
            {
                user = new User { UserName = username };
                var result = await _userManager.CreateAsync(user, password);
                if (!result.Succeeded)
                {
                    return result;
                }               
                return result;
            }
        }
        //public async Task<IdentityResult> DeleteAccount(int id)
        //{
            
        //    User user = await _userManager.FindByIdAsync(AccountId);
        //    var result = await _userManager.DeleteAsync(user);
        //    if (!result.Succeeded)
        //    {
        //        return result;
        //    }

        //    return result;
        //}
        
    
        //public IEnumerable<Field> GetForm()
        //{
        //    var form = new List<Field>
        //    {
        //        new Field
        //        {
        //            Name="username",
        //            Type="String",
        //            IsRequired=true,
        //            DisplayName="Имя пользователя",

        //        },
        //        new Field
        //        {
        //            Name="password",
        //            Type="Password",
        //            IsRequired=true,
        //            DisplayName="Пароль"
        //        }
        //    };
        //    return form;
        //}
        public async Task<SignInResult> LoginAsync(string username, string password) => await _signInManager.PasswordSignInAsync(username, password, true, true);
        public async Task LogoutAsync() => await _signInManager.SignOutAsync();
        
    }
}
