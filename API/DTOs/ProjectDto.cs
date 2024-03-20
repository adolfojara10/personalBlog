using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs;

public class ProjectDto
{
    [Required]
    public string Title { get; set; }
    [Required]
    public string Content { get; set; }
    public List<PhotoProject> Photos { get; set; }
}