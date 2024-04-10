using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs;

public class ProjectUpdateDto
{
    public int Id {get; set;}
    public string Title { get; set; }
    
    public string Content { get; set; }
    //public List<PhotoProject> Photos { get; set; }
}