using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace check.Models
{
    public class Inspector
    {
        public string FullName { get; set; }
        public string Position { get; set; }
        public string InspectorTypeName { get; set; }
    }
    public class CheckEntity
    {
        [DisplayName("Инспекторы")]
        public List<Inspector> Inspectors;
        [DisplayName("Проверяющая инстанция")]
        public string ProviderOrganizationName { get; set; }
        [DisplayName("ИНН")]
        public string INN { get; set; }
        [DisplayName("ОГРН")]
        public string OGRN { get; set; }
        [DisplayName("Надзорный орган")]
        public string ProsecutorsName { get; set; }
        [DisplayName("Дата начала проверки")]
        public string StartDate { get; set; }
        [DisplayName("Статус")]
        public string Status { get; set; }
        [DisplayName("Тип проверки")]
        public string TypeName { get; set; }
        public string OkatoName { get; set; }
        [DisplayName("Организация")]
        public string GoalOrganizationName { get; set; }
    }
}