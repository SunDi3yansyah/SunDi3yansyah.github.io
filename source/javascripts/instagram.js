$.fn.instagram = function(g, h, j) {
    var k = ($(this).attr("id") != null || $(this).attr("id") != undefined ? '#' + $(this).attr("id") : '.' + $(this).attr("class"));
    $(this).html('<div class="instagram-profile"></div><div class="instagram-gallery"></div>');

    if (document.location.pathname.indexOf("/gallery") == 0) {
        instagram_profile(k);
        instagram_gallery(k, "");
    } else {
        instagram_gallery(k, "");
    }

    function instagram_profile(c) {
        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + g + '/?access_token=' + j,
            crossDomain: true,
            dataType: 'jsonp'
        }).done(function(a) {
            var b = '';
            b += '<div class="instagram-user-picture"><img src="' + a.data.profile_picture.replace(/\\/, "") + '" title="' + a.data.username + ' on instagram"></div>';
            b += '<div class="instagram-username"><a href="https://www.instagram.com/' + a.data.username + '" target="_blank">@' + a.data.username + '</a></div>';
            b += '<div class="instagram-full-name">' + a.data.full_name + '</div>';
            b += '<div class="instagram-bio">' + a.data.bio.replace(/(?:\r\n|\r|\n)/g, '<br />') + '</div>';
            b += '<div class="instagram-statistics"><hr><div class="row"><div class="col-md-2"></div><div class="col-md-8"><div class="row"><div class="col-md-4"><div class="ig-value">' + a.data.counts.media + '</div><div class="ig-label">Posts</div></div><div class="col-md-4"><div class="ig-value">' + a.data.counts.followed_by + '</div><div class="ig-label">Followers</div></div><div class="col-md-4"><div class="ig-value">' + a.data.counts.follows + '</div><div class="ig-label">Following</div></div></div></div><div class="col-md-2"></div></div><hr></div>';
            $(c + ' .instagram-profile').html(b)
        })
    }

    function instagram_gallery(e, f) {
        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + g + '/media/recent/?access_token=' + j + '&count=' + h + '&max_id=' + f,
            crossDomain: true,
            dataType: 'jsonp'
        }).done(function(c) {
            var d = '';
            $.each(c.data, function(i, a) {
                var b = '';
                b += (c.data[i].caption == null || c.data[i].caption == undefined ? '' : c.data[i].caption.text.replace(/(?:\r\n|\r|\n)/g, '<br />'));
                d += '<div class="instagram-user-gallery">';
                d += '<a href="' + c.data[i].images.standard_resolution.url.replace(/\\/, "") + '" class="instagram-popup" rel="instagram-popup" title="' + b + '">';
                d += '<img src="' + c.data[i].images.thumbnail.url.replace(/\\/, "") + '" alt="" title="' + b + '">';
                d += '</a>';
                d += '</div>'
            });
            if (document.location.pathname.indexOf("/gallery") == 0) {
                if (c.pagination.next_max_id != null && c.pagination.next_max_id != undefined) {
                    d += '<div class="instagram-more"><a class="btn btn-lg btn-more" data-next="' + c.pagination.next_max_id + '"><i class="fa fa-camera-retro"></i> Lebih Banyak</a></div>'
                }
                $(e + ' .instagram-gallery').append(d);
                $('.btn-more').click(function() {
                    instagram_gallery(e, $(this).data('next'));
                    $(e + ' .instagram-more').remove();
                    return false
                })
            } else {
                $(e + ' .instagram-gallery').append(d);
            }
        })
    }
}
