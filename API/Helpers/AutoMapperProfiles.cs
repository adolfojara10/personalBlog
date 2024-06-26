using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<Post, PostSendDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url));
            
        CreateMap<Photo, PhotoDto>();

        CreateMap<Project, ProjectSendDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url));
            
        CreateMap<PhotoProject, PhotoProjectDto>();

        CreateMap<ProjectUpdateDto, Project>();
        CreateMap<PostUpdateDto, Post>();

    }
        
}