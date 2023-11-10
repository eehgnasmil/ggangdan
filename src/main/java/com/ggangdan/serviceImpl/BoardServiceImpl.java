package com.ggangdan.serviceImpl;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.dto.BoardVO;
import com.ggangdan.mapper.BoardMapper;
import com.ggangdan.mapper.InvestigationMapper;
import com.ggangdan.service.BoardService;
import com.ggangdan.service.HeaderService;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	BoardMapper board;

	@Override
	public void insert(BoardVO vo) {
		MultipartFile file = vo.getFile();

		if (file.isEmpty()) {
			// MultipartFile이 비어 있을 때, 대체 이미지 경로로 대체
			String defaultImagePath = "/resources/noimg.jpg";

		} else {

			String fileRealName = file.getOriginalFilename(); // 파일명을 얻어낼 수 있는 메서드!
			vo.setOfile(fileRealName);
			long size = file.getSize(); // 파일 사이즈

			// 서버에 저장할 파일이름 fileextension으로 .jsp이런식의 확장자 명을 구함
			String fileExtension = fileRealName.substring(fileRealName.lastIndexOf("."), fileRealName.length());

			
			String uploadFolder = "E:\\kdigital2307\\spring\\springws\\ggangdan\\src\\main\\webapp\\resources\\imgs\\boardImg";
			// String uploadFolder = "D:\\kdigital2307\\Spring\\springws\\ggangdan\\src\\main\\webapp\\resources\\imgs\\boardImg";


			UUID uuid = UUID.randomUUID();
			String[] uuids = uuid.toString().split("-");

			String uniqueName = uuids[0] + fileExtension;

			vo.setSfile(uniqueName);

			// File saveFile = new File(uploadFolder+"\\"+fileRealName); uuid 적용 전

			File saveFile = new File(uploadFolder + "\\" + uniqueName + fileExtension); // 적용 후
			try {
				file.transferTo(saveFile); // 실제 파일 저장메서드(filewriter 작업을 손쉽게 한방에 처리해준다.)
			} catch (IllegalStateException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		board.insert(vo);
	}

	@Override
	public BoardVO getBest(int iidx) {
		return board.getBest(iidx);
	}

	@Override
	public BoardVO getLast() {
		return board.getLast();
	}

	@Override
	public boolean getRecommend(int idx) {
		return board.getRecommend(idx);
	}

	@Override
	public void updateRecommend(int idx) {
		board.updateRecommend(idx);
		
	}

	@Override
	public void deleteRecommend(int idx) {
		board.deleteRecommend(idx);
		
	}

}
